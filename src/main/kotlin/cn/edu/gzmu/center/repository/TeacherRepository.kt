package cn.edu.gzmu.center.repository

import cn.edu.gzmu.center.base.BaseRepository
import cn.edu.gzmu.center.model.Sql
import cn.edu.gzmu.center.model.entity.Teacher
import cn.edu.gzmu.center.model.extension.addOptional
import cn.edu.gzmu.center.model.extension.mapAs
import cn.edu.gzmu.center.model.extension.toJsonObject
import io.vertx.core.eventbus.Message
import io.vertx.core.json.JsonObject
import io.vertx.kotlin.core.json.jsonObjectOf
import io.vertx.kotlin.sqlclient.getConnectionAwait
import io.vertx.kotlin.sqlclient.preparedQueryAwait
import io.vertx.pgclient.PgPool
import io.vertx.sqlclient.SqlConnection
import io.vertx.sqlclient.Tuple
import org.slf4j.Logger
import org.slf4j.LoggerFactory

/**
 * .
 *
 * @author <a href="https://echocow.cn">EchoCow</a>
 * @date 2020/2/22 下午4:20
 */
interface TeacherRepository {
  /**
   * Teacher page
   */
  suspend fun teacherPage(message: Message<JsonObject>)

  /**
   * Teacher update
   */
  fun teacherUpdate(message: Message<JsonObject>)
}

class TeacherRepositoryImpl(private val pool: PgPool) : BaseRepository(), TeacherRepository {
  private val table = "teacher"
  private val log: Logger = LoggerFactory.getLogger(TeacherRepositoryImpl::class.java.name)

  companion object {
    private val TEACHER_UPDATE = """
      UPDATE teacher SET name = $2, school_id = $3, college_id = $4, dep_id = $5,
      gender = $6, birthday = $7, graduation_date = $8, work_date = $9, nation = $10,
      degree = $11, academic = $12, major = $13, prof_title = $14, prof_title_ass_date = $15,
      graduate_institution = $16, major_research = $17, subject_category = $18, id_number = $19,
      is_academic_leader = $20, sort = $21, remark = $22, is_enable = $23 WHERE id = $1
    """.trimIndent()
  }

  override suspend fun teacherPage(message: Message<JsonObject>) {
    val body = message.body()
    val sort = body.getString("sort")
    body.put("sort", 1)
    val teacher = body.mapAs(Teacher.serializer())
    val baseSql = Sql(table)
      .select(Teacher::class)
      .whereLike(teacher::name)
      .andNonNull(
        teacher::gender, teacher::workDate, teacher::nation, teacher::academic,
        teacher::degree, teacher::profTitle, teacher::schoolId, teacher::collegeId,
        teacher::depId, teacher::isEnable
      )
    var connection: SqlConnection? = null
    try {
      connection = pool.getConnectionAwait()
      val params = Tuple.of("%${teacher.name}%").addOptional(
        teacher.gender, teacher.workDate, teacher.nation, teacher.academic,
        teacher.degree, teacher.profTitle, teacher.schoolId, teacher.collegeId,
        teacher.depId, teacher.isEnable
      )
      val count = connection.preparedQueryAwait(baseSql.count(), params).first().getLong("count")
      val sql = baseSql.page(sort).get()
      val resource = body.getJsonArray("resource").map { it as JsonObject }
      val teacherEditPermission = resource.find { res ->
        res.getString("url") == "/teacher" && res.getString("method") == "PATCH"
      } != null
      val userViewPermission = resource.find { res ->
        res.getString("url") == "/user/*" && res.getString("method") == "GET"
      } != null
      val teacherAddPermission = resource.find { res ->
        res.getString("url") == "/teacher" && res.getString("method") == "POST"
      } != null
      val userEditPermission = resource.find { res ->
        res.getString("url") == "/user" && res.getString("method") == "PATCH"
      } != null
      val teacherImportPermission = resource.find { res ->
        res.getString("url") == "/teacher/import" && res.getString("method") == "POST"
      } != null
      val userPasswordPermission = resource.find { res ->
        res.getString("url") == "/user/password" && res.getString("method") == "PATCH"
      } != null
      val rowSet =
        connection.preparedQueryAwait(sql, params.addLong(body.getLong("size")).addLong(body.getLong("offset")))
      val content = rowSet.map {
        it.toJsonObject<Teacher>()
          .put("edit", teacherEditPermission).put("resetPassword", userPasswordPermission)
          .put("userView", userViewPermission).put("userEdit", userEditPermission)
      }
      log.debug("Success get page data: {}", count)
      message.reply(
        jsonObjectOf(
          "content" to content, "itemsLength" to count,
          "add" to teacherAddPermission, "import" to teacherImportPermission
        )
      )
    } catch (e: Exception) {
      message.fail(500, e.cause?.message)
      throw e
    } finally {
      connection?.close()
      log.debug("Close temporary database connection.")
    }
  }

  override fun teacherUpdate(message: Message<JsonObject>) {
    val body = message.body()
    val teacher = body.mapAs(Teacher.serializer())
    val params = Tuple.of(
      teacher.id, teacher.name, teacher.schoolId, teacher.collegeId,
      teacher.depId, teacher.gender, teacher.birthday, teacher.graduationDate,
      teacher.workDate, teacher.nation, teacher.degree, teacher.academic, teacher.major,
      teacher.profTitle, teacher.profTitleAssDate, teacher.graduateInstitution, teacher.majorResearch,
      teacher.subjectCategory, teacher.idNumber, teacher.isAcademicLeader, teacher.sort, teacher.remark,
      teacher.isEnable
    )
    pool.preparedQuery(TEACHER_UPDATE, params) {
      messageException(message, it)
      log.debug("Success update teacher: {}", teacher.id)
      message.reply("Success")
    }
  }

}

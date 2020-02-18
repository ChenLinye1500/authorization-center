package cn.edu.gzmu.center.handler

import cn.edu.gzmu.center.OauthHelper
import io.vertx.core.Vertx
import io.vertx.junit5.VertxTestContext
import io.vertx.kotlin.core.json.jsonObjectOf
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

/**
 * .
 *
 * @author <a href="https://echocow.cn">EchoCow</a>
 * @date 2020/2/14 下午9:34
 */
class StudentHandlerTest : OauthHelper() {
  @Test
  internal fun `Student classmate test when passed`(vertx: Vertx, testContext: VertxTestContext) {
    GlobalScope.launch {
      username = "student"
      oauthToken(vertx)
      client.get("/student/me")
        .send {
          resultCheck(testContext, it)
          val response = it.result()
          testContext.verify {
            assertEquals(ok, response.statusCode())
            val body = response.bodyAsJsonObject()
            assertTrue(body.containsKey("info"))
            assertTrue(body.containsKey("students"))
            testContext.completeNow()
          }
        }
    }
  }

  @Test
  internal fun `Student simple update when passed`(vertx: Vertx, testContext: VertxTestContext) {
    GlobalScope.launch {
      username = "teacher1"
      oauthToken(vertx)
      client.patch("/student")
        .sendJsonObject(
          jsonObjectOf(
            "id" to 19,
            "name" to "19",
            "no" to "19",
            "gender" to "男",
            "enterDate" to "2019-12-11",
            "birthday" to "2019-12-11",
            "idNumber" to "20213131313",
            "isEnable" to true
          )
        ) {
          resultCheck(testContext, it)
          val response = it.result()
          testContext.verify {
            assertEquals(noContent, response.statusCode())
            testContext.completeNow()
          }
        }
    }
  }

  @Test
  internal fun `Get student page when passed`(testContext: VertxTestContext) {
    client.get("/student")
      .send {
        pageCheck(testContext, it)
      }
  }

  @Test
  internal fun `Update student compete information when passed`(testContext: VertxTestContext) {
    client.patch("/student/complete")
      .sendJsonObject(jsonObjectOf(
        "id" to 10,
        "name" to "testSTUDENT",
        "gender" to "男",
        "no" to "201401011234",
        "idNumber" to "522520199708810014",
        "enterDate" to "2011-12-11",
        "birthday" to "2011-12-11",
        "academic" to 54,
        "schoolId" to 1,
        "collegeId" to 2,
        "depId" to 19,
        "specialtyId" to 20,
        "classesId" to 22,
        "sort" to 25,
        "remark" to "remark"
      )) {
        noContentCheck(testContext, it)
      }
  }
  @Test
  internal fun `Add student compete information when passed`(testContext: VertxTestContext) {
    client.post("/student")
      .sendJsonObject(jsonObjectOf(
        "name" to "testSTUDENT",
        "gender" to "男",
        "no" to "20140101${(1000..9999).random()}",
        "idNumber" to "522520199708810014",
        "enterDate" to "2011-12-11",
        "birthday" to "2011-12-11",
        "academic" to 54,
        "schoolId" to 1,
        "collegeId" to 2,
        "depId" to 19,
        "specialtyId" to 20,
        "classesId" to 22,
        "sort" to 25,
        "remark" to "remark"
      )) {
        noContentCheck(testContext, it)
      }
  }
}

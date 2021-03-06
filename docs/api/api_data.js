define({ "api": [
  {
    "type": "POST",
    "url": "/oauth/check_token",
    "title": "oauth server check token",
    "version": "1.0.0",
    "name": "OauthCheckToken",
    "description": "<p>Get token info.</p>",
    "group": "Oauth",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request POST 'http://127.0.0.1:8889/oauth/check_token' \\\n  --header 'Authorization: Bearer token'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sub",
            "description": "<p>user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>token active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_student",
            "description": "<p>if has ROLE_STUDENT.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_teacher",
            "description": "<p>if has ROLE_TEACHER.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "authorities",
            "description": "<p>user roles.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>client id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "aud",
            "description": "<p>client id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "nbf",
            "description": "<p>not before.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "scope",
            "description": "<p>client scopes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "exp",
            "description": "<p>expires times.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "iat",
            "description": "<p>issue at times.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jti",
            "description": "<p>jwt id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"sub\": \"admin\",\n   \"user_name\": \"admin\",\n   \"active\": true,\n   \"is_student\": true,\n   \"authorities\": [\n     \"ROLE_ADMIN\",\n     \"ROLE_STUDENT\"\n   ],\n   \"client_id\": \"gzmu-auth\",\n   \"aud\": [\n     \"gzmu-auth\"\n   ],\n   \"nbf\": 1581047798,\n   \"is_teacher\": false,\n   \"scope\": [\n     \"READ\"\n   ],\n   \"exp\": 1581647798,\n   \"iat\": 1581047798,\n   \"jti\": \"aafe976b-e360-4148-8d45-4553b33703bc\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/oauth/OauthHandler.kt",
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/oauth/server",
    "title": "oauth server login",
    "version": "1.0.0",
    "name": "OauthLogin",
    "description": "<p>Get remote authorization server logout url.</p>",
    "group": "Oauth",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://127.0.0.1:8889/oauth/server'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>authorization server login url.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"server\": \"http://......\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/oauth/OauthHandler.kt",
    "groupTitle": "Oauth"
  },
  {
    "type": "GET",
    "url": "/oauth/logout",
    "title": "oauth server logout",
    "version": "1.0.0",
    "name": "OauthLogout",
    "description": "<p>Get remote authorization server logout url. The client logout authorization server url.</p>",
    "group": "Oauth",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://127.0.0.1:8889/oauth/logout'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>authorization server logout url.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"server\": \"http://......\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/oauth/OauthHandler.kt",
    "groupTitle": "Oauth"
  },
  {
    "type": "GET",
    "url": "/oauth/me",
    "title": "oauth me",
    "version": "1.0.0",
    "name": "OauthMe",
    "description": "<p>Current user info.</p>",
    "group": "Oauth",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://127.0.0.1:8889/oauth/me'\n  --header 'Authorization: Bearer token'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>user avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>user image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"admin\",\n  \"email\": \"lizhongyue248@163.com\",\n  \"avatar\": \"http://image.japoul.cn/me.jpg\",\n  \"image\": \"http://image.japoul.cn/me.jpg\",\n  \"phone\": \"13765308262\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/oauth/OauthHandler.kt",
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/refresh_token",
    "title": "oauth server refresh token",
    "version": "1.0.0",
    "name": "OauthRefreshToken",
    "description": "<p>Get new token info by refresh token.</p>",
    "group": "Oauth",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request POST 'http://127.0.0.1:8889/oauth/refresh_token' \\\n  --header 'Authorization: Bearer token'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>always bearer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>refresh token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "expires_in",
            "description": "<p>expires times.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sub",
            "description": "<p>user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_teacher",
            "description": "<p>if have ROLE_TEACHER.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_student",
            "description": "<p>if have ROLE_STUDENT.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "nbf",
            "description": "<p>not before.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "iat",
            "description": "<p>issued at.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "authorities",
            "description": "<p>user authorities.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jti",
            "description": "<p>JWT ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"access_token\": \"......\",\n  \"token_type\": \"bearer\",\n  \"refresh_token\": \"......\",\n  \"expires_in\": 586103,\n  \"scope\": \"...\",\n  \"sub\": \"admin\",\n  \"nbf\": 1581047798,\n  \"is_teacher\": false,\n  \"user_name\": \"admin\",\n  \"iat\": 1581047798,\n  \"is_student\": true,\n  \"authorities\": [\n    \"ROLE_ADMIN\",\n    \"ROLE_STUDENT\"\n  ],\n  \"jti\": \"...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/oauth/OauthHandler.kt",
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/token",
    "title": "oauth code token",
    "version": "1.0.0",
    "name": "OauthTokenCode",
    "description": "<p>Get token info by authorization code.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>authorization code.</p>"
          }
        ]
      }
    },
    "group": "Oauth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>always bearer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>refresh token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "expires_in",
            "description": "<p>expires times.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sub",
            "description": "<p>user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_teacher",
            "description": "<p>if have ROLE_TEACHER.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_student",
            "description": "<p>if have ROLE_STUDENT.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "nbf",
            "description": "<p>not before.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "iat",
            "description": "<p>issued at.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "authorities",
            "description": "<p>user authorities.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jti",
            "description": "<p>JWT ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"access_token\": \"......\",\n  \"token_type\": \"bearer\",\n  \"refresh_token\": \"......\",\n  \"expires_in\": 586103,\n  \"scope\": \"...\",\n  \"sub\": \"admin\",\n  \"nbf\": 1581047798,\n  \"is_teacher\": false,\n  \"user_name\": \"admin\",\n  \"iat\": 1581047798,\n  \"is_student\": true,\n  \"authorities\": [\n    \"ROLE_ADMIN\",\n    \"ROLE_STUDENT\"\n  ],\n  \"jti\": \"...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/oauth/OauthHandler.kt",
    "groupTitle": "Oauth"
  },
  {
    "type": "GET",
    "url": "/me/info",
    "title": "user info",
    "version": "1.0.0",
    "name": "UserInfo",
    "description": "<p>Get current user info, student or user.</p>",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://127.0.0.1:8889/me/info'\n  --header 'Authorization: Bearer token'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "name",
            "description": "<p>route name, always true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Student:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 2,\n    \"name\": \"林国瑞\",\n    \"spell\": \"lín guó ruì \",\n    \"userId\": 2,\n    \"schoolId\": 1,\n    \"collegeId\": 2,\n    \"depId\": 45,\n    \"specialtyId\": 48,\n    \"classesId\": 49,\n    \"no\": \"201742060002\",\n    \"gender\": \"男\",\n    \"idNumber\": \"522526202002050002\",\n    \"birthday\": \"2020-02-05\",\n    \"enterDate\": \"2017-09-01\",\n    \"academic\": \"本科\",\n    \"graduationDate\": \"2021-06-30\",\n    \"graduateInstitution\": \"无\",\n    \"originalMajor\": \"无\",\n    \"resume\": \"我是一个学生\",\n    \"sort\": 19,\n    \"createUser\": \"yms\",\n    \"createTime\": \"2019-08-07 16:40:28\",\n    \"modifyUser\": \"yms\",\n    \"modifyTime\": \"2019-08-07 16:40:28\",\n    \"remark\": \"这是一个学生\",\n    \"isEnable\": true\n}",
          "type": "json"
        },
        {
          "title": "Teacher:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 3,\n    \"name\": \"李开富\",\n    \"spell\": \"lǐ kāi fù \",\n    \"userId\": 3,\n    \"schoolId\": 1,\n    \"collegeId\": 2,\n    \"depId\": 3,\n    \"gender\": \"男\",\n    \"birthday\": \"2020-02-05\",\n    \"graduationDate\": \"2020-06-01\",\n    \"profTitleAssDate\": null,\n    \"workDate\": null,\n    \"nation\": \"China\",\n    \"degree\": null,\n    \"academic\": \"博士\",\n    \"major\": \"图书管理学专业\",\n    \"profTitle\": null,\n    \"graduateInstitution\": \"工程管理学院\",\n    \"majorResearch\": \"混日子\",\n    \"resume\": \"这是一位教师\",\n    \"subjectCategory\": null,\n    \"idNumber\": \"522501194910010007\",\n    \"isAcademicLeader\": false,\n    \"sort\": 89,\n    \"createUser\": \"yms\",\n    \"createTime\": \"2020-01-18 10:22:07\",\n    \"modifyUser\": \"yms\",\n    \"modifyTime\": \"2020-01-18 10:22:07\",\n    \"remark\": \"这是一位大学教师\",\n    \"isEnable\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/me/MeHandler.kt",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/me/menu",
    "title": "user menu",
    "version": "1.0.0",
    "name": "UserMenu",
    "description": "<p>Get current user menu about front. To set user's nav menu.</p>",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://127.0.0.1:8889/me/menu'\n  --header 'Authorization: Bearer token'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JsonArray",
            "optional": false,
            "field": "menus",
            "description": "<p>user menus.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"menus\": [\n    \"name\": \"menu.system\",\n    \"children\": [\n      {\n        \"text\": \"menu.dashboard\",\n        \"icon\": \"mdi-view-dashboard\",\n        \"remark\": \"menu.system\"\n      }\n    ]\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/me/MeHandler.kt",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/me/routes",
    "title": "user routes",
    "version": "1.0.0",
    "name": "UserRoutes",
    "description": "<p>Get current user routes about front. To set user's dynamic routing.</p>",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://127.0.0.1:8889/me/routes'\n  --header 'Authorization: Bearer token'",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "name",
            "description": "<p>route name, always true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"index\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/kotlin/cn/edu/gzmu/center/me/MeHandler.kt",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token.</p>"
          }
        ]
      }
    }
  }
] });

"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToMongoDB\": () => (/* binding */ connectToMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGODB_URI  } = process.env;\nif (!MONGODB_URI) {\n    throw new Error(\"Invalid environment variable: MONGODB_URI\");\n}\nconst connectToMongoDB = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);\n        if (connection.readyState === 1) {\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFFQyxZQUFXLEVBQUUsR0FBR0MsUUFBUUMsR0FBRztBQUVuQyxJQUFJLENBQUNGLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNLDZDQUE2QztBQUMvRCxDQUFDO0FBRU0sTUFBTUMsbUJBQW1CLFVBQVk7SUFDMUMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUcsTUFBTU4sdURBQWdCLENBQUNDO1FBRTlDLElBQUlLLFdBQVdFLFVBQVUsS0FBSyxHQUFHO1lBQy9CLE9BQU9DLFFBQVFDLE9BQU8sQ0FBQyxJQUFJO1FBQzdCLENBQUM7SUFDSCxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPRixRQUFRRyxNQUFNLENBQUNEO0lBQ3hCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hdXRoLXVpLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgTU9OR09EQl9VUkkgfSA9IHByb2Nlc3MuZW52O1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGU6IE1PTkdPREJfVVJJXCIpO1xufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdFRvTW9uZ29EQiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkpO1xuXG4gICAgaWYgKGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY29ubmVjdFRvTW9uZ29EQiIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./models/users.ts":
/*!*************************!*\
  !*** ./models/users.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: true,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        match: [\n            /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\n            \"Invalid email address\"\n        ]\n    },\n    fullName: {\n        type: String,\n        required: [\n            true,\n            \"Full name is required\"\n        ],\n        minLength: [\n            4,\n            \"Full name should be atleast 4 characters long\"\n        ],\n        maxLength: [\n            30,\n            \"Full name should be less than 30 characters\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ],\n        select: false\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDNUJJLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsUUFBUSxJQUFJO1FBQ1pDLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBb0I7UUFDckNDLE9BQU87WUFDTDtZQUNBO1NBQ0Q7SUFDSDtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1DO1FBQ05FLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBd0I7UUFDekNHLFdBQVc7WUFBQztZQUFHO1NBQWdEO1FBQy9EQyxXQUFXO1lBQUM7WUFBSTtTQUE4QztJQUNoRTtJQUNBQyxVQUFVO1FBQ1JSLE1BQU1DO1FBQ05FLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBdUI7UUFDeENNLFFBQVEsS0FBSztJQUNmO0FBQ0Y7QUFFQSxNQUFNQyxPQUFPYixpREFBVyxJQUFJRCwrQ0FBS0EsQ0FBQyxRQUFRRTtBQUUxQyxpRUFBZVksSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hdXRoLXVpLy4vbW9kZWxzL3VzZXJzLnRzPzUwNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJFbWFpbCBpcyByZXF1aXJlZFwiXSxcbiAgICBtYXRjaDogW1xuICAgICAgL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLyxcbiAgICAgIFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIsXG4gICAgXSxcbiAgfSxcbiAgZnVsbE5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkZ1bGwgbmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICBtaW5MZW5ndGg6IFs0LCBcIkZ1bGwgbmFtZSBzaG91bGQgYmUgYXRsZWFzdCA0IGNoYXJhY3RlcnMgbG9uZ1wiXSxcbiAgICBtYXhMZW5ndGg6IFszMCwgXCJGdWxsIG5hbWUgc2hvdWxkIGJlIGxlc3MgdGhhbiAzMCBjaGFyYWN0ZXJzXCJdLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXG4gICAgc2VsZWN0OiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5jb25zdCBVc2VyID0gbW9kZWxzLlVzZXIgfHwgbW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiVXNlclNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInJlcXVpcmVkIiwibWF0Y2giLCJmdWxsTmFtZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInBhc3N3b3JkIiwic2VsZWN0IiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/users.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/users */ \"(api)/./models/users.ts\");\n\n\n\n\n\n\nconst { GOOGLE_CLIENT_ID , GOOGLE_CLIENT_SECRET  } = process.env;\nif (!GOOGLE_CLIENT_ID) throw new Error(\"Invalid env variable: GOOGLE_CLIENT_ID\");\nif (!GOOGLE_CLIENT_SECRET) throw new Error(\"Invalid env variable: GOOGLE_CLIENT_SECRET\");\nconst options = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: GOOGLE_CLIENT_ID,\n            clientSecret: GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__.connectToMongoDB)().catch((err)=>{\n                    throw new Error(err);\n                });\n                const user = await _models_users__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                    email: credentials?.email\n                }).select(\"+password\");\n                if (!user) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isPasswordCorrect = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password);\n                if (!isPasswordCorrect) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            user && (token.user = user);\n            return token;\n        },\n        session: async ({ session , token  })=>{\n            const user = token.user;\n            session.user = user;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ0U7QUFDckI7QUFDK0I7QUFDVjtBQUVmO0FBRXpDLE1BQU0sRUFBRU0saUJBQWdCLEVBQUVDLHFCQUFvQixFQUFFLEdBQUdDLFFBQVFDLEdBQUc7QUFFOUQsSUFBSSxDQUFDSCxrQkFDSCxNQUFNLElBQUlJLE1BQU0sMENBQTBDO0FBRTVELElBQUksQ0FBQ0gsc0JBQ0gsTUFBTSxJQUFJRyxNQUFNLDhDQUE4QztBQUVoRSxNQUFNQyxVQUEyQjtJQUMvQkMsV0FBVztRQUNUWCxpRUFBY0EsQ0FBQztZQUNiWSxVQUFVUDtZQUNWUSxjQUFjUDtRQUNoQjtRQUNBSixzRUFBbUJBLENBQUM7WUFDbEJZLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVcsRUFBRTtnQkFDM0IsTUFBTWIsOERBQWdCQSxHQUFHbUIsS0FBSyxDQUFDLENBQUNDLE1BQVE7b0JBQ3RDLE1BQU0sSUFBSWQsTUFBTWMsS0FBSztnQkFDdkI7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNcEIsNkRBQVksQ0FBQztvQkFDOUJhLE9BQU9ELGFBQWFDO2dCQUN0QixHQUFHUyxNQUFNLENBQUM7Z0JBRVYsSUFBSSxDQUFDRixNQUFNO29CQUNULE1BQU0sSUFBSWYsTUFBTSx1QkFBdUI7Z0JBQ3pDLENBQUM7Z0JBRUQsTUFBTWtCLG9CQUFvQixNQUFNMUIsaURBQU9BLENBQ3JDZSxZQUFhSSxRQUFRLEVBQ3JCSSxLQUFLSixRQUFRO2dCQUdmLElBQUksQ0FBQ08sbUJBQW1CO29CQUN0QixNQUFNLElBQUlsQixNQUFNLHVCQUF1QjtnQkFDekMsQ0FBQztnQkFFRCxPQUFPZTtZQUNUO1FBQ0Y7S0FDRDtJQUNESSxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxXQUFXO1FBQ1RDLEtBQUssT0FBTyxFQUFFQyxNQUFLLEVBQUVWLEtBQUksRUFBRSxHQUFLO1lBQzlCQSxRQUFTVSxDQUFBQSxNQUFNVixJQUFJLEdBQUdBLElBQUc7WUFDekIsT0FBT1U7UUFDVDtRQUNBSixTQUFTLE9BQU8sRUFBRUEsUUFBTyxFQUFFSSxNQUFLLEVBQUUsR0FBSztZQUNyQyxNQUFNVixPQUFPVSxNQUFNVixJQUFJO1lBQ3ZCTSxRQUFRTixJQUFJLEdBQUdBO1lBRWYsT0FBT007UUFDVDtJQUNGO0FBQ0Y7QUFFQSxpRUFBZS9CLGdEQUFRQSxDQUFDVyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWF1dGgtdWkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9Nb25nb0RCIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL21vZGVscy91c2Vyc1wiO1xuXG5jb25zdCB7IEdPT0dMRV9DTElFTlRfSUQsIEdPT0dMRV9DTElFTlRfU0VDUkVUIH0gPSBwcm9jZXNzLmVudjtcblxuaWYgKCFHT09HTEVfQ0xJRU5UX0lEKVxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVudiB2YXJpYWJsZTogR09PR0xFX0NMSUVOVF9JRFwiKTtcblxuaWYgKCFHT09HTEVfQ0xJRU5UX1NFQ1JFVClcbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbnYgdmFyaWFibGU6IEdPT0dMRV9DTElFTlRfU0VDUkVUXCIpO1xuXG5jb25zdCBvcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBHT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBHT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvTW9uZ29EQigpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzPy5lbWFpbCxcbiAgICAgICAgfSkuc2VsZWN0KFwiK3Bhc3N3b3JkXCIpO1xuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGNvbXBhcmUoXG4gICAgICAgICAgY3JlZGVudGlhbHMhLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIucGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWlzUGFzc3dvcmRDb3JyZWN0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICBjb25zdCB1c2VyID0gdG9rZW4udXNlciBhcyBJVXNlcjtcbiAgICAgIHNlc3Npb24udXNlciA9IHVzZXI7XG5cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChvcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiY29tcGFyZSIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb25uZWN0VG9Nb25nb0RCIiwiVXNlciIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImNhdGNoIiwiZXJyIiwidXNlciIsImZpbmRPbmUiLCJzZWxlY3QiLCJpc1Bhc3N3b3JkQ29ycmVjdCIsInBhZ2VzIiwic2lnbkluIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
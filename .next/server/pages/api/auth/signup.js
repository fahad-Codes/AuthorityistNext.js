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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
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

/***/ "(api)/./pages/api/auth/signup.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/users */ \"(api)/./models/users.ts\");\n\n\n\nconst handler = async (req, res)=>{\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToMongoDB)();\n        if (req.method === \"POST\") {\n            if (!req.body) return res.status(400).json({\n                error: \"Data is missing\"\n            });\n            const { fullName , email , password  } = req.body;\n            const userExists = await _models_users__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                email\n            });\n            if (userExists) {\n                return res.status(409).json({\n                    error: \"User Already exists\"\n                });\n            } else {\n                if (password.length < 6) return res.status(409).json({\n                    error: \"Password should be 6 characters long\"\n                });\n                const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n                const newUser = await _models_users__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n                    fullName,\n                    email,\n                    password: hashedPassword\n                });\n                const user = {\n                    email: newUser.email,\n                    fullName: newUser.fullName,\n                    _id: newUser._id\n                };\n                return res.status(201).json({\n                    success: true,\n                    user\n                });\n            }\n        } else {\n            res.status(405).json({\n                error: \"Method Not Allowed\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDZ0M7QUFDd0I7QUFDZjtBQUV6QyxNQUFNRyxVQUFVLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUNuRSxJQUFJO1FBQ0YsTUFBTUosOERBQWdCQTtRQUV0QixJQUFJRyxJQUFJRSxNQUFNLEtBQUssUUFBUTtZQUN6QixJQUFJLENBQUNGLElBQUlHLElBQUksRUFBRSxPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWtCO1lBRXRFLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHVCxJQUFJRyxJQUFJO1lBRTlDLE1BQU1PLGFBQWEsTUFBTVosNkRBQVksQ0FBQztnQkFBRVU7WUFBTTtZQUU5QyxJQUFJRSxZQUFZO2dCQUNkLE9BQU9ULElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXNCO1lBQzdELE9BQU87Z0JBQ0wsSUFBSUcsU0FBU0csTUFBTSxHQUFHLEdBQ3BCLE9BQU9YLElBQ0pHLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXVDO2dCQUUxRCxNQUFNTyxpQkFBaUIsTUFBTWpCLDhDQUFJQSxDQUFDYSxVQUFVO2dCQUU1QyxNQUFNSyxVQUFVLE1BQU1oQiw0REFBVyxDQUFDO29CQUNoQ1M7b0JBQ0FDO29CQUNBQyxVQUFVSTtnQkFDWjtnQkFFQSxNQUFNRyxPQUFPO29CQUNYUixPQUFPTSxRQUFRTixLQUFLO29CQUNwQkQsVUFBVU8sUUFBUVAsUUFBUTtvQkFDMUJVLEtBQUtILFFBQVFHLEdBQUc7Z0JBQ2xCO2dCQUVBLE9BQU9oQixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUMxQmEsU0FBUyxJQUFJO29CQUNiRjtnQkFDRjtZQUNGLENBQUM7UUFDSCxPQUFPO1lBQ0xmLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBcUI7UUFDckQsQ0FBQztJQUNILEVBQUUsT0FBT0EsT0FBTztRQUNkYSxRQUFRYixLQUFLLENBQUMsVUFBVUE7UUFDeEJMLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QjtJQUN4RDtBQUNGO0FBRUEsaUVBQWVQLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC11aS8uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC50cz83ZjFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgY29ubmVjdFRvTW9uZ29EQiB9IGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL21vZGVscy91c2Vyc1wiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvTW9uZ29EQigpO1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICBpZiAoIXJlcS5ib2R5KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJEYXRhIGlzIG1pc3NpbmdcIiB9KTtcblxuICAgICAgY29uc3QgeyBmdWxsTmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xuXG4gICAgICBpZiAodXNlckV4aXN0cykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBlcnJvcjogXCJVc2VyIEFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNilcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKDQwOSlcbiAgICAgICAgICAgIC5qc29uKHsgZXJyb3I6IFwiUGFzc3dvcmQgc2hvdWxkIGJlIDYgY2hhcmFjdGVycyBsb25nXCIgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG5cbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgICAgZW1haWw6IG5ld1VzZXIuZW1haWwsXG4gICAgICAgICAgZnVsbE5hbWU6IG5ld1VzZXIuZnVsbE5hbWUsXG4gICAgICAgICAgX2lkOiBuZXdVc2VyLl9pZCxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgdXNlcixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiaGFzaCIsImNvbm5lY3RUb01vbmdvREIiLCJVc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJmdWxsTmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyRXhpc3RzIiwiZmluZE9uZSIsImxlbmd0aCIsImhhc2hlZFBhc3N3b3JkIiwibmV3VXNlciIsImNyZWF0ZSIsInVzZXIiLCJfaWQiLCJzdWNjZXNzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();
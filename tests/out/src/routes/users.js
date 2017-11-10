"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../controllers/users");
var users = express_1.Router();
/* GET users listing. */
users.post("/login", users_1.login);
users.post('/signin', users_1.singin);
exports.default = users;
//# sourceMappingURL=users.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../services/user-service");
var response_body_1 = require("../common/response-body");
var global_1 = require("../../config/global");
var jsonwebtoken_1 = require("jsonwebtoken");
function login(req, res, next) {
    var body = req.body;
    user_service_1.userService.login(body.email, body.password)
        .then(function (result) {
        if (result) {
            var token = jsonwebtoken_1.sign({ id: result._id }, global_1.config.secret, { expiresIn: "1h" });
            res.send(new response_body_1.ResponseBody(true, token));
        }
        else
            res.send(new response_body_1.ResponseBody(false));
    })
        .catch(function (err) { return res.status(500).send(new response_body_1.ResponseBody(false, null, err)); });
}
exports.login = login;
//# sourceMappingURL=login.js.map
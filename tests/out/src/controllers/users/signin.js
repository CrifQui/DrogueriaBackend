"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../services/user-service");
var response_body_1 = require("../common/response-body");
function singin(req, res, next) {
    var body = req.body;
    user_service_1.userService.singin(body)
        .then(function (result) { return response_body_1.resSucces(res, true); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.singin = singin;
//# sourceMappingURL=signin.js.map
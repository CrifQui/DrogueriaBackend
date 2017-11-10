"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drogueria_service_1 = require("../../services/drogueria-service");
var response_body_1 = require("../common/response-body");
function deleteD(req, res, next) {
    var id = req.params.id;
    drogueria_service_1.drogueriaService.delete(id)
        .then(function (result) { return response_body_1.resSucces(res, true); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.deleteD = deleteD;
//# sourceMappingURL=delete.js.map
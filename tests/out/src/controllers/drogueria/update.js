"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drogueria_service_1 = require("../../services/drogueria-service");
var response_body_1 = require("../common/response-body");
function update(req, res) {
    var id = req.params;
    var body = req.body;
    drogueria_service_1.drogueriaService.update(id, body)
        .then(function (result) { return response_body_1.resSucces(res); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.update = update;
//# sourceMappingURL=update.js.map
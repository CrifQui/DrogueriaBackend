"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_service_1 = require("../../services/items-service");
var response_body_1 = require("../common/response-body");
function all(req, res, next) {
    var id = req.params.id;
    items_service_1.itemService.allByDrogueria(id)
        .then(function (resutl) { return response_body_1.resSucces(res, resutl); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.all = all;
//# sourceMappingURL=all.js.map
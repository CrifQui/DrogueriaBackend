"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_service_1 = require("../../services/items-service");
var response_body_1 = require("../common/response-body");
function itemAvailable(req, res, next) {
    var id = req.params.id;
    items_service_1.itemService.itemsByAvailable(id)
        .then(function (result) { return response_body_1.resSucces(res, result); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.itemAvailable = itemAvailable;
//# sourceMappingURL=items-available.js.map
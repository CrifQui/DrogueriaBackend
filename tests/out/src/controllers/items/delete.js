"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_service_1 = require("../../services/items-service");
var response_body_1 = require("../common/response-body");
function deleteItem(req, res, next) {
    var id = req.params.id;
    items_service_1.itemService.delete(id)
        .then(function (result) { return response_body_1.resSucces(res); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.deleteItem = deleteItem;
//# sourceMappingURL=delete.js.map
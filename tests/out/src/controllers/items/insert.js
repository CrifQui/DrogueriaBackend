"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_service_1 = require("../../services/items-service");
var response_body_1 = require("../common/response-body");
function insertWithCantidad(req, res) {
    var body = req.body;
    items_service_1.itemService.insertWithCantidad(body.item, body.cantidad)
        .then(function (result) { return response_body_1.resSucces(res); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.insertWithCantidad = insertWithCantidad;
function insert(req, res) {
    var body = req.body;
    items_service_1.itemService.insert(body)
        .then(function (result) { return response_body_1.resSucces(res); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.insert = insert;
//# sourceMappingURL=insert.js.map
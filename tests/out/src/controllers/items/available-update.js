"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_body_1 = require("../common/response-body");
var items_service_1 = require("../../services/items-service");
var available_io_service_1 = require("../../services/available-io-service");
function AvailableUpdate(req, res, next) {
    var body = req.body;
    var id = req.params.id;
    items_service_1.itemService.availableUpdate(id, body.cantidad, body.available)
        .then(function (result) {
        available_io_service_1.availbleIO.changeAvailable(req.params.id, body.cantidad, body.available);
        response_body_1.resSucces(res);
    })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.AvailableUpdate = AvailableUpdate;
//# sourceMappingURL=available-update.js.map
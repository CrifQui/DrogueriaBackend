"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_service_1 = require("../../services/items-service");
var response_body_1 = require("../common/response-body");
function update(req, res, next) {
    var id = req.params.id;
    var body = req.body;
    items_service_1.itemService.update(id, body)
        .then(function (result) { return response_body_1.resSucces(res); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.update = update;
//# sourceMappingURL=update.js.map
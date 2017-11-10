"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_service_1 = require("../../services/items-service");
var response_body_1 = require("../common/response-body");
function allByPresentations(req, res, next) {
    var presentations = req.query.presentations ?
        req.query.presentations.split(",") : null;
    items_service_1.itemService.allByPresentations(presentations)
        .then(function (result) { return response_body_1.resSucces(res, result); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.allByPresentations = allByPresentations;
//# sourceMappingURL=all-presentations.js.map
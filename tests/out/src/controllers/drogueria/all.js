"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drogueria_service_1 = require("../../services/drogueria-service");
var response_body_1 = require("../common/response-body");
var RestaurantQuery = /** @class */ (function () {
    function RestaurantQuery(query) {
        this.limit = query.limit ? parseInt(query.limit) : 0;
        this.skip = query.skip ? parseInt(query.skip) : 0;
    }
    return RestaurantQuery;
}());
exports.RestaurantQuery = RestaurantQuery;
function all(req, res, next) {
    var query = new RestaurantQuery(req.query);
    drogueria_service_1.drogueriaService.all(query.skip, query.limit)
        .then(function (result) { return response_body_1.resSucces(res, result); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.all = all;
//# sourceMappingURL=all.js.map
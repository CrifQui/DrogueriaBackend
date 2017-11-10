"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drogueria_service_1 = require("../../services/drogueria-service");
var response_body_1 = require("../common/response-body");
var LocationQuery = /** @class */ (function () {
    function LocationQuery(query) {
        this.lat = query.lat ? parseFloat(query.lat) : 0;
        this.lon = query.lon ? parseFloat(query.lon) : 0;
        this.km = query.km ? parseInt(query.km) : 5;
    }
    return LocationQuery;
}());
exports.LocationQuery = LocationQuery;
function allLocation(req, res, next) {
    var query = new LocationQuery(req.query);
    drogueria_service_1.drogueriaService
        .allByLocation(query.lon, query.lat, query.km)
        .then(function (result) { return response_body_1.resSucces(res, result); })
        .catch(function (err) { return response_body_1.resFail(res, 500, err); });
}
exports.allLocation = allLocation;
//# sourceMappingURL=all-location.js.map
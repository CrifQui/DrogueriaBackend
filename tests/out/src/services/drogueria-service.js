"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_connection_1 = require("./db-connection");
var mongodb_1 = require("mongodb");
var DrogueriaService = /** @class */ (function () {
    function DrogueriaService(con) {
        this.con = con;
    }
    Object.defineProperty(DrogueriaService.prototype, "db", {
        get: function () {
            return this.con.db.collection("droguerias");
        },
        enumerable: true,
        configurable: true
    });
    DrogueriaService.prototype.insert = function (res) {
        return this.db.insertOne(res);
    };
    DrogueriaService.prototype.update = function (id, res) {
        return this.db.updateOne({ _id: new mongodb_1.ObjectID(id) }, { $set: res });
    };
    DrogueriaService.prototype.delete = function (id) {
        return this.db.deleteOne({ _id: new mongodb_1.ObjectID(id) });
    };
    DrogueriaService.prototype.all = function (skip, limit) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 0; }
        return this.db.find()
            .skip(skip)
            .limit(limit)
            .toArray();
    };
    DrogueriaService.prototype.allByLocation = function (lon, lat, km) {
        if (km === void 0) { km = 1; }
        return this.db.find({
            localizacion: {
                $geoWithin: {
                    $centerSphere: [[lon, lat], km / 6378]
                }
            }
        })
            .toArray();
    };
    return DrogueriaService;
}());
exports.DrogueriaService = DrogueriaService;
exports.drogueriaService = new DrogueriaService(db_connection_1.Con);
//# sourceMappingURL=drogueria-service.js.map
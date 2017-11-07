"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("../config/global");
var mongodb_1 = require("mongodb");
var DBconnection = /** @class */ (function () {
    function DBconnection(configDB, callback) {
        if (callback === void 0) { callback = null; }
        var _this = this;
        var connection = configDB.host
            + ":" + configDB.port
            + "/" + configDB.database;
        mongodb_1.MongoClient.connect(connection)
            .then(function (db) {
            _this.db = db;
            db.collection("droguerias").createIndex({ localizacion: "2dsphere" });
            if (callback)
                callback();
        }).catch(function (err) { return console.log(err); });
    }
    return DBconnection;
}());
exports.DBconnection = DBconnection;
exports.Con = new DBconnection(global_1.config.database, function () { });
//# sourceMappingURL=db-connection.js.map
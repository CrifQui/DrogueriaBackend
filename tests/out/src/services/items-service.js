"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_connection_1 = require("./db-connection");
var mongodb_1 = require("mongodb");
var ItemService = /** @class */ (function () {
    function ItemService(con) {
        this.con = con;
    }
    Object.defineProperty(ItemService.prototype, "db", {
        get: function () {
            return this.con.db.collection("items");
        },
        enumerable: true,
        configurable: true
    });
    ItemService.prototype.insert = function (item) {
        return this.db.insertOne(item);
    };
    ItemService.prototype.update = function (id, item) {
        return this.db.updateOne({ _id: new mongodb_1.ObjectID(id) }, { $set: item });
    };
    ItemService.prototype.delete = function (id) {
        return this.db.deleteOne({ _id: new mongodb_1.ObjectID(id) });
    };
    ItemService.prototype.allByDrogueria = function (id) {
        return this.db.find({
            "drogueria._id": id
        })
            .toArray();
    };
    ItemService.prototype.allByPresentations = function (presentations) {
        return this.db.find({
            presentations: {
                $in: presentations
            }
        }).toArray();
    };
    ItemService.prototype.deleteAllPresentations = function (id) {
        return this.db.updateOne({ _id: new mongodb_1.ObjectID(id) }, { $set: { presentations: [] } });
    };
    ItemService.prototype.addPesentation = function (id, presentation) {
        return this.db.updateOne({ _id: new mongodb_1.ObjectID(id) }, { $push: { presentations: presentation } });
    };
    ItemService.prototype.insertWithCantidad = function (item, numberItems) {
        var cantidad = [];
        for (var i = 0; i < numberItems; i++) {
            cantidad.push({ numero: i + 1, available: true });
        }
        item.cantidad = cantidad;
        return this.db.insertOne(item);
    };
    ItemService.prototype.itemsByAvailable = function (id) {
        return this.db.aggregate([
            { $match: { _id: new mongodb_1.ObjectID(id) } },
            { $project: { items: 1 } },
            { $unwind: "$cantidad" },
            { $match: { "cantidad.available": true } },
            { $group: { _id: "$_id", cantidad: { $push: "$cantidad" } } }
        ])
            .toArray()
            .then(function (res) {
            return Promise.resolve(res[0].cantidad);
        });
    };
    ItemService.prototype.availableUpdate = function (id, cantidad, available) {
        return this.db.updateOne({ _id: new mongodb_1.ObjectID(id), "cantidad.numero": cantidad }, { $set: {
                "cantidad.$.available": available
            } });
    };
    return ItemService;
}());
exports.ItemService = ItemService;
exports.itemService = new ItemService(db_connection_1.Con);
//# sourceMappingURL=items-service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var db_connection_1 = require("../../src/services/db-connection");
var drogueria_service_1 = require("../../src/services/drogueria-service");
describe("Drogueria Service", function () {
    var db;
    var service;
    var drogueria = {
        nombre: "Drogas La Rebaja",
        direccion: "calle123",
        contacto: "23435",
        imagen: "http://",
        localizacion: {
            type: "Point",
            coordinates: [-76.59766137599945,
                2.4531361343614724]
        }
    };
    var lon = -76.598183;
    var lat = 2.452403;
    var km = 1;
    before(function (done) {
        chai.should();
        chai.use(chaiAsPromised);
        db = new db_connection_1.DBconnection({
            host: "mongodb://localhost",
            port: 27017,
            database: "drogueriaTest"
        }, function () {
            service = new drogueria_service_1.DrogueriaService(db);
            done();
        });
    });
    it("Get empty", function () {
        return service.all().should.eventually.to.deep.equal([]);
    });
    it("Insert", function () {
        return service.insert(drogueria).should.eventually.not.null;
    });
    it("Get all", function () {
        return service.all().should.eventually.to.have.lengthOf(1);
    });
    it("Get by Location", function () {
        return service.allByLocation(lon, lat, km).should.eventually.lengthOf(1);
    });
    it("Get empty Location", function () {
        return service.allByLocation(0.234, 0.34, 1).should.eventually.lengthOf(0);
    });
    it("Delete drogueria", function () {
        return service.delete(drogueria._id).should.eventually.not.null;
    });
    after(function (done) {
        db.db.dropCollection("droguerias", function (err) {
            if (err)
                done(err);
            else {
                db.db.close();
                done();
            }
        });
    });
});
//# sourceMappingURL=test-drogueria-service.js.map
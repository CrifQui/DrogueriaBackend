"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var superTest = require("supertest");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var app_1 = require("../../src/app");
describe("Items Route", function () {
    var request;
    var id;
    before(function () {
        chai.should();
        chai.use(chaiAsPromised);
        request = superTest(app_1.default);
    });
    it("insert items", function () {
        var item = {
            nombre: "acetominofen",
            laboratorio: "genfar",
            precio: 2000,
            drogueria: {
                direccion: "calle1234",
                nombre: "drogas la rebaja"
            }
        };
        return request.post("api/v1/items")
            .set("Content-Type", "application/json")
            .send(item)
            .expect(200)
            .should.eventually.property("body")
            .property("success").true;
    });
    it.skip("insert items cantidad", function () {
        var item = {
            cantidad: 10,
            item: {
                nombre: "acetominofen",
                laboratorio: "genfar",
                precio: 2000,
                drogueria: {
                    direccion: "calle1234",
                    nombre: "drogas la rebaja"
                }
            }
        };
        return request.post("api/v1/items")
            .set("Content-Type", "application/json")
            .send(item)
            .expect(200)
            .should.eventually.property("body")
            .property("success").true;
    });
    it("Delete item", function () {
        return request.delete("/api/v1/items/" + id)
            .expect(200)
            .should.eventually.property("body")
            .property("success").true;
    });
});
//# sourceMappingURL=test-item-routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var db_connection_1 = require("../../src/services/db-connection");
var user_service_1 = require("../../src/services/user-service");
describe("User Service", function () {
    var db;
    var service;
    var user = {
        nombre: "Cristian",
        apellido: "Quinayas",
        celular: "301",
        email: "dario@email.com",
        password: "123"
    };
    before(function (done) {
        chai.should();
        chai.use(chaiAsPromised);
        db = new db_connection_1.DBconnection({
            host: "mongodb://localhost",
            port: 27017,
            database: "droguertiaTest"
        }, function () {
            service = new user_service_1.UserService(db);
            done();
        });
    });
    it("Signin", function () {
        return service.singin(user)
            .should.eventually.property("insertedCount").equal(1);
    });
    it("Signin with existing user", function () {
        return service.singin(user)
            .should.eventually.rejected;
    });
    it("Login", function () {
        return service.login(user.email, user.password)
            .should.eventually.not.null;
    });
    it("Incorrect Login", function () {
        return service.login("dasdasdas", "123123")
            .should.eventually.null;
    });
    after(function (done) {
        db.db.dropCollection("users", function (err) {
            if (err)
                done(err);
            else {
                db.db.close();
                done();
            }
        });
    });
});
//# sourceMappingURL=test-user-service.js.map
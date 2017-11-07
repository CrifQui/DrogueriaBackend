"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_connection_1 = require("./db-connection");
var UserService = /** @class */ (function () {
    function UserService(con) {
        this.con = con;
    }
    Object.defineProperty(UserService.prototype, "db", {
        get: function () {
            return this.con.db.collection("users");
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (email, pass) {
        return this.db.findOne({
            email: email,
            password: pass
        });
    };
    UserService.prototype.singin = function (user) {
        var _this = this;
        return this.db.findOne({ email: user.email })
            .then(function (usr) {
            if (usr == null) {
                return _this.db.insertOne(user);
            }
            else {
                return Promise.reject("Usuario ya existente");
            }
        });
    };
    return UserService;
}());
exports.UserService = UserService;
exports.userService = new UserService(db_connection_1.Con);
//# sourceMappingURL=user-service.js.map
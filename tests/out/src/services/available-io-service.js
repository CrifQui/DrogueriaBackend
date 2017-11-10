"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketIO = require("socket.io");
var AvailableIoService = /** @class */ (function () {
    function AvailableIoService() {
    }
    AvailableIoService.prototype.init = function (server) {
        var io = socketIO(server);
        this.cantidad = io.of("socket/cantidad");
        this.cantidad.on("connection", function (socket) {
            socket.on("subscribe", function (id) {
                socket.join(id);
            });
            socket.on("unsubscribe", function (id) {
                socket.leave(id);
            });
        });
    };
    AvailableIoService.prototype.changeAvailable = function (id, cantidad, available) {
        this.cantidad.to(id)
            .emit("available", { cantidad: cantidad, disponible: available });
    };
    return AvailableIoService;
}());
exports.AvailableIoService = AvailableIoService;
exports.availbleIO = new AvailableIoService();
//# sourceMappingURL=available-io-service.js.map
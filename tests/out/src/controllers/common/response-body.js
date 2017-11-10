"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseBody = /** @class */ (function () {
    function ResponseBody(success, data, err) {
        if (data === void 0) { data = null; }
        if (err === void 0) { err = null; }
        this.success = success;
        this.data = data;
        this.err = err;
    }
    return ResponseBody;
}());
exports.ResponseBody = ResponseBody;
function resFail(res, code, err) {
    res.status(code).send(new ResponseBody(false, null, err));
}
exports.resFail = resFail;
function resSucces(res, data) {
    if (data === void 0) { data = null; }
    res.send(new ResponseBody(true, data));
}
exports.resSucces = resSucces;
//# sourceMappingURL=response-body.js.map
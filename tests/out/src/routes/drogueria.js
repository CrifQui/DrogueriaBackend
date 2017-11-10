"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../controllers/drogueria/index");
var express_1 = require("express");
var router = express_1.Router();
router.get('/', index_1.all);
router.get('/point', index_1.allLocation);
router.post('/', index_1.insert);
router.put('/:id', index_1.update);
router.delete('/:id', index_1.deleteD);
exports.default = router;
//# sourceMappingURL=drogueria.js.map
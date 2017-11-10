"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/items/index");
//import { verifyAuth } from '../middlewares/auth';
var router = express_1.Router();
//router.use(verifyAuth);
router.get("/", index_1.allByPresentations);
router.get("/:id", index_1.all);
router.post("/", index_1.insert);
router.post("/:id/presentation", index_1.addPresentation);
router.put("/:id", index_1.update);
router.delete("/:id", index_1.deleteItem);
router.delete("/:id/ingredients", index_1.deletePresentions);
router.get("/:id/available", index_1.itemAvailable);
router.put("/:id/available", index_1.AvailableUpdate);
exports.default = router;
//# sourceMappingURL=items.js.map
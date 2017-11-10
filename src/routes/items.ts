import { Router } from 'express';
import {  addPresentation,all,allByPresentations,insert,update,deleteItem,deletePresentions,AvailableUpdate,itemAvailable} from '../controllers/items/index'
import { verifyAuth } from '../middlewares/auth';

const router: Router = Router();

router.use(verifyAuth);
router.get("/", allByPresentations);
router.get("/:id", all);
router.post("/", insert);
router.post("/:id/presentation", addPresentation);
router.put("/:id", update);
router.delete("/:id", deleteItem);
router.delete("/:id/ingredients", deletePresentions);
router.get("/:id/available",itemAvailable);
router.put("/:id/available",AvailableUpdate);

export default router;
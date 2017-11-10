import {all,allLocation,deleteD,insert,update} from'../controllers/drogueria/index';
import{Router} from 'express';
import { verifyAuth } from '../middlewares/auth';

const router: Router = Router();

router.use(verifyAuth);

router.get('/', all);
router.get('/point', allLocation);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', deleteD);

export default router;
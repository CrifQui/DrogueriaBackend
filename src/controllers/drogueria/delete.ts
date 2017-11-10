import { drogueriaService } from '../../services/drogueria-service';
import { resFail, resSucces } from '../common/response-body';
import { Response, Request } from 'express';

export function deleteD(req: Request, res: Response, next) {
    let id = req.params.id;
    drogueriaService.delete(id)
        .then(result => resSucces(res, true))
        .catch(err => resFail(res, 500, err))
}

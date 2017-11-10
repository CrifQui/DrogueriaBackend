import { drogueriaService } from '../../services/drogueria-service';
import {Drogueria} from '../../services/common/drogueria';
import { resFail, resSucces } from '../common/response-body';
import { Response, Request } from 'express';

export function update(req: Request, res: Response) {
    let id = req.params;
    let body: Drogueria = req.body;
    drogueriaService.update(id,body)
        .then(result => resSucces(res))
        .catch(err => resFail(res, 500, err));
}
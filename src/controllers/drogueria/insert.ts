import { drogueriaService } from '../../services/drogueria-service';
import {Drogueria} from '../../services/common/drogueria';
import { resFail, resSucces } from '../common/response-body';
import { Response, Request } from 'express';

export function insert(req: Request, res: Response) {
    let body: Drogueria = req.body;
    drogueriaService.insert(body)
        .then(result => resSucces(res))
        .catch(err => resFail(res, 500, err));
}
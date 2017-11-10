import {drogueriaService } from '../../services/drogueria-service';
import {Drogueria  } from '../../services/common/drogueria';
import { resFail, resSucces } from '../common/response-body';

import { Response, Request } from 'express';

export class RestaurantQuery {

    limit: number;
    skip: number;

    constructor(query: any) {
        this.limit = query.limit ? parseInt(query.limit) : 0;
        this.skip = query.skip ? parseInt(query.skip) : 0;
    }
}

export function all(req: Request, res: Response, next) {
    let query: RestaurantQuery =
        new RestaurantQuery(req.query);
    drogueriaService.all(query.skip, query.limit)
        .then(result => resSucces<Drogueria[]>(res, result))
        .catch(err => resFail(res, 500, err));
}
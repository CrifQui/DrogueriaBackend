import {itemService} from'../../services/items-service';
import {AvailableItem} from'../../services/common/items';
import {resFail,resSucces} from '../common/response-body';
import {Request,Response} from 'express';

export function itemAvailable(req:Request, res:Response,next){
    let id= req.params.id;
    itemService.itemsByAvailable(id)
    .then(result => resSucces<AvailableItem[]>(res,result))
    .catch(err=> resFail(res,500,err));
}
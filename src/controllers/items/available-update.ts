import{resSucces, resFail} from '../common/response-body';
import {Response, Request} from 'express';
import {itemService} from '../../services/items-service';
import {availbleIO} from '../../services/available-io-service';
export interface AvailableUpdateBody{
    cantidad:number;
    available:boolean;
}
export function AvailableUpdate(req:Request, res:Response,next){
    let body : AvailableUpdateBody = req.body;
    let id = req.params.id;
    itemService.availableUpdate(id,body.cantidad,body.available)
    .then(result=>{
        availbleIO.changeAvailable(req.params.id, body.cantidad,body.available);
        resSucces(res);
    })
    .catch(err => resFail(res,500,err))
}
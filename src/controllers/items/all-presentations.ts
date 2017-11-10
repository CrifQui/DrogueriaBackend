import{itemService}from'../../services/items-service';
import{Items}from'../../services/common/items';
import{Request,Response}from'express';
import{resFail,resSucces}from'../common/response-body';

export function allByPresentations(req:Request,res:Response,next){
    let presentations: string[]= req.query.presentations ?
    req.query.presentations.split(","):null;

    itemService.allByPresentations(presentations)
    .then(result=> resSucces<Items[]>(res,result))
    .catch(err=> resFail(res,500,err));
}
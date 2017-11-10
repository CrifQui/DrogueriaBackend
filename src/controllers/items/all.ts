import{itemService}from'../../services/items-service';
import{Items}from'../../services/common/items';
import{Request,Response}from'express';
import{resFail,resSucces}from'../common/response-body';

export function all(req:Request,res:Response,next){
    let id= req.params.id;
    itemService.allByDrogueria(id)
    .then(resutl=> resSucces<Items[]>(res,resutl))
    .catch(err=> resFail(res,500,err));
}
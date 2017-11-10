import{itemService}from'../../services/items-service';
import{Items}from'../../services/common/items';
import{Request,Response}from'express';
import{resFail,resSucces}from'../common/response-body';

export function update(req:Request,res:Response,next){
   let id= req.params.id;
   let body: Items= req.body;
    itemService.update(id,body)
    .then(result=> resSucces(res))
    .catch(err=> resFail(res,500,err));
}
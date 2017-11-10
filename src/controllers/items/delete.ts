import{itemService}from'../../services/items-service';
import{Items}from'../../services/common/items';
import{Request,Response}from'express';
import{resFail,resSucces}from'../common/response-body';

export function deleteItem(req:Request,res:Response,next){
    let id = req.params.id;

    itemService.delete(id)
    .then(result=> resSucces(res))
    .catch(err=> resFail(res,500,err));
}
import{itemService}from'../../services/items-service';
import{Items}from'../../services/common/items';
import{Request,Response}from'express';
import{resFail,resSucces}from'../common/response-body';

export function deletePresentions(req:Request,res:Response,next){
    let id =req.params.id;

    itemService.deleteAllPresentations(id)
    .then(result=> resSucces(res))
    .catch(err=> resFail(res,500,err));
}
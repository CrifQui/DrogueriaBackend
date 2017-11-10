import{itemService}from'../../services/items-service';
import{Items}from'../../services/common/items';
import{Request,Response}from'express';
import{resFail,resSucces}from'../common/response-body';

export interface PresentationBody{
    name:string;
}

export function addPresentation(req:Request,res:Response,next){
    let body: PresentationBody =req.body;
    let id = req.params.id;

    itemService.addPesentation(id,body.name)
    .then(result=>resSucces(res))
    .catch(err=> resFail(res,500,err));
}
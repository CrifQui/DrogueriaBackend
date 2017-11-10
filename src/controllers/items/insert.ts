import{itemService}from'../../services/items-service';
import{Items}from'../../services/common/items';
import{Request,Response}from'express';
import{resFail,resSucces}from'../common/response-body';

export interface InsertBody{
    cantidad: number;
    item:Items;
}

export function insertWithCantidad(req:Request,res:Response){
   let body :InsertBody= req.body;
  
    itemService.insertWithCantidad(body.item,body.cantidad)
    .then(result => resSucces(res))
    .catch(err => resFail(res, 500, err));
}

export function insert(req:Request, res:Response){
    let body :Items =req.body;
    itemService.insert(body)
    .then(result => resSucces(res))
    .catch(err => resFail(res, 500, err));
}
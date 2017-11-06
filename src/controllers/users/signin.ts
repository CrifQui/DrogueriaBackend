import{userService}from '../../services/user-service';
import{User}from '../../services/common/user';
import{resFail,resSucces}from '../common/response-body';
import{Request, Response}from 'express';

export function singin(req: Request, res:Response, next){
    let body: User = req.body;
    userService.singin(body)
    .then(result => resSucces(res,true))
    .catch(err => resFail(res, 500, err));
    
}
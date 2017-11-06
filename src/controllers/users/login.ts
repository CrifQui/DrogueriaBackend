import {userService} from'../../services/user-service';
import{resFail,resSucces}from '../common/response-body';
import{Request,Response}from 'express';
import{config}from '../../config/global';
import{ sign }from 'jsonwebtoken';
export interface LoginBody{
    email:string;
    password:string;
}
export function login(req:Request, res:Response, next){
    let body: LoginBody =req.body;
    userService.login(body.email, body.password)
    .then(result =>{
        let token = sign({id: result._id},
            config.secret,{expiresIn:"1h"})
    })
}
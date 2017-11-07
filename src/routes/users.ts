import { Router } from 'express';
import {login,singin} from '../controllers/users';


const users:Router = Router();

/* GET users listing. */
users.post("/login",login);
users.post('/signin',singin);

export default users;

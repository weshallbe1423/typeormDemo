import * as express from "express";
import {UserController} from "../controller/user.controller";

const router = express.Router();
const controller=new UserController();
router.post('/signUp',controller.signUp);
router.post('/login',controller.login);


export default router

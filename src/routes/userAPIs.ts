import userService from "~/services/userService";
import { Request,Response } from "express";
import express from 'express';
const route = express.Router();

route.get('/getAccount',userService.getAccount)
route.post('/createAccount',userService.createAccount)
route.post('/createUser',userService.createUser)
export default route;
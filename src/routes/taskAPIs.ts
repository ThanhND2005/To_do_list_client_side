
import { Request,Response,NextFunction } from 'express';
import express from 'express';
const route = express.Router();
import userService from '~/services/userService';

route.get('/',userService.getAccount)

export default route;
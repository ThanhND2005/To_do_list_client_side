import { Request,Response,NextFunction } from 'express';
import express from 'express';
const route = express.Router();
import getAccount from '~/services/userService';

route.get('/',getAccount)

export default route;
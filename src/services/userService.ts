import {query} from '../config/database'
import { Request,Response,NextFunction } from 'express'
import pool from '../config/database'
import User  from '~/models/user'
const getAccount = async (req : Request ,res : Response) =>{
  try {
    const userRow = await pool.query('SELECT * FROM "User"');
    const users = userRow.rows;
    res.status(200).json(users);
  }
  catch(err)
  {
    res.status(404).send(err)
  }
}

export default getAccount;

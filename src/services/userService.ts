import 'express-session'
declare module 'express-session'{
  interface SessionData{
    user : any
  }
}
import { Request,Response,NextFunction } from 'express'
import pool from '../config/database'
import bcrypt from 'bcrypt'
const saltRounds = 10
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
const createAccount = async (req : Request, res: Response)=>{
  try {
    const user = {username : req.body.username, password : req.body.password }
    const hashPassword = await bcrypt.hash(user.password,saltRounds)
    const ex1 = await pool.query('INSERT INTO "Account" (username,passwork) VALUES($1,$2)',[user.username,hashPassword])
    res.status(200).json(ex1.rows[0])
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}
const createUser = async (req : Request, res: Response) =>{
  const account = await pool.query('SELECT * FROM "Account" WHERE username=$1',[req.body.username])
  const ex = await pool.query('INSERT INTO "User" (name,gender,id) VALUES($1,$2,$3)',[req.body.name,req.body.gender,account.rows[0].id])
  res.status(200).json(ex.rows[0])
}
const checkUser = async (req : Request, res: Response)=>{
  try {
    const user = await pool.query('SELECT * FROM "Account" WHERE username=$1',[req.body.username])
    if(user.rows && await bcrypt.compare(req.body.password,user.rows[0].passwork))
    {
        req.session.user = user.rows[0]
        res.status(200).json({message:true})
    }
    else{
      res.status(200).json({message:false})
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}
export default {
  createAccount : createAccount,
  getAccount : getAccount,
  createUser : createUser,
  checkUser :checkUser,
}

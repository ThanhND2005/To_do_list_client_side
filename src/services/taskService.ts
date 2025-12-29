import { Request,Response } from "express";
import pool from '../config/database';
import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user: any; // Hoặc thay 'any' bằng kiểu dữ liệu User của bạn (ví dụ: IUser)
  }
}

const createTask  = async (req : Request, res : Response)=>{
  try {
    const ex1 = await pool.query('INSERT INTO task (id,title, description) VALUES($1,$2,$3)',[req.session.user.id,req.body.title,req.body.description])
    res.status(200).json(ex1.rows[0])
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export default {
  createTask : createTask,
}
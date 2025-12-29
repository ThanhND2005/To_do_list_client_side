import { Request,Response } from "express";
import pool from '../config/database';
import 'express-session';
import { log } from "console";

declare module 'express-session' {
  interface SessionData {
    user: any; 
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
const deleteTask = async (req : Request , res : Response) => {
  try {
    const ex1 = await pool.query('DELETE FROM task WHERE idtask=$1',[req.body.idtask]);
    res.status(200).json(ex1.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
export default {
  createTask : createTask,
  deleteTask : deleteTask
}
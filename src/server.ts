import express, { Request,Response,NextFunction } from 'express';
import configSession from './config/session';
const app = express();
import 'dotenv/config';
import { route } from './routes';
import path from 'path';
const port  = process.env.PORT;


app.use(express.static(path.join('./src','public')));
configSession(app);
app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use((req : Request,res : Response,next :NextFunction)=>{
  if(req.method ==='POST' && req.body && req.body._method)
  {
    req.method  = req.body._method.toUpperCase(); 
    delete req.body._method;
  }
  next()
})
route(app);

app.listen(port,()=> console.log(`app listening http://localhost:${port}`))


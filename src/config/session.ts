
import session from "express-session";
import 'dotenv/config';
import connectPgSimple from "connect-pg-simple";
import { Express } from "express";
import { Pool } from "pg";
import { Application } from "express";
import pool  from "./database";
const PgSession = connectPgSimple(session)
const configSession = (app: Application) => {
  app.set('trust proxy', 1)
  app.use(session({
    secret: process.env.SECRET_KEY_SESSION as string,
    resave: false,
    saveUninitialized: false,
    store: new PgSession({
      pool: pool,
      tableName: 'session',
      createTableIfMissing: true,
    }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: false,
      httpOnly: true
    }
  }))
}
export default configSession;

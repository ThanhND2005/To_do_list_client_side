import express from 'express';
import taskAPIs from './taskAPIs';
import userAPIs from './userAPIs';
import { Application } from 'express';

export const route = (app : Application) => {
  app.use('/',userAPIs);
  app.use('/task',taskAPIs);
}
import 'dotenv/config'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString : process.env.DATABASE_URL as string,
  ssl: {
    rejectUnauthorized: false,
  },
});
export const  query =  (text :string,params:any) => pool.query(text,params);

export default pool;
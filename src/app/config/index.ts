import dotenv from 'dotenv';
import path from 'path';

// LoadEnvironmentVariables
dotenv.config({ path: path.join(process.cwd(), '.env') });

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,

  frontend_url: process.env.FRONTEND_URL,
  database_url: process.env.DATABASE_URL,
};

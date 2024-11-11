import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  allowOrigins: process.env.ALLOWED_ORIGINS,
  port: process.env.APP_PORT,
};

import { PoolOptions } from "mysql2";
import { ENV } from "./env";

const { host, user, password, database } = ENV;
export const dbConfig: PoolOptions = {
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

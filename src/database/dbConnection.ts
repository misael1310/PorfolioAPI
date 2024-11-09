import { Mysql } from "./Mysql";
import { dbConfig } from "config/dbConfig";

export const DbConnection = new Mysql(dbConfig);

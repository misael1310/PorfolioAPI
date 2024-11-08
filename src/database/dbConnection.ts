import mysql from "mysql2/promise";
import { dbConfig } from "config/dbConfig";

export const dbConnection = mysql.createPool(dbConfig);

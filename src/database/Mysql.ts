import { Database } from "../models/dataBase";
import { Pool, PoolOptions, createPool, RowDataPacket } from "mysql2/promise";

export class Mysql implements Database {
  private conn: Pool;
  private credentials: PoolOptions;

  constructor(credentials: PoolOptions) {
    this.credentials = credentials;
    this.conn = createPool(this.credentials);
  }

  private ensureConnection() {
    if (!this?.conn) this.conn = createPool(this.credentials);
  }

  async queryRows<T>(query: string): Promise<T[]> {
    if (!query) throw new Error("Query is required");

    this.ensureConnection();
    const [result] = await this.conn.query<RowDataPacket[]>(query);

    return result as T[];
  }
}

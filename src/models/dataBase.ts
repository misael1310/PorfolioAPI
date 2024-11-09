export interface Database {
  queryRows<T>(query: string): Promise<T[]>;
}

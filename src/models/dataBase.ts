export interface Database {
  queryRows<T>(query: string, values?: string[]): Promise<T[]>;
}

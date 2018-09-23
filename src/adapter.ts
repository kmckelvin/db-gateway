import { QueryResult } from 'pg';

export interface IDbResult extends QueryResult {}

export interface IDbAdapter {
  query(sql: string, parameters?: any[]): Promise<IDbResult>;
}

import { Pool } from 'pg';
import { IDbAdapter, IDbResult } from './adapter';

export class PostgresqlAdapter implements IDbAdapter {
  private pool: Pool;
  constructor(pool: Pool) {
    this.pool = pool;
  }

  async query(sql: string, parameters?: any[]): Promise<IDbResult> {
    const result = await this.pool.query(sql, parameters);

    return result;
  }
}

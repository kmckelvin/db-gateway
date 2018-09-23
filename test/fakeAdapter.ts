import { IDbAdapter, IDbResult } from '../src/adapter';

export class FakeAdapter implements IDbAdapter {
  private queries: Map<string, IDbResult>;
  constructor(queries: Map<string, IDbResult>) {
    this.queries = queries;
  }
  async query(sql: string) {
    return this.queries.get(sql);
  }
}

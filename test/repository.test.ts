import { EntityRepository } from '../src/repository';
import { FakeAdapter } from './fakeAdapter';
import { IDbResult } from '../src/adapter';

class User {
  public id: number;
  public email: string;

  constructor(props) {
    Object.assign(this, props);
  }
}

function queryResults(command: string, rows: any[]): [string, IDbResult] {
  return [
    command,
    {
      rows,
      command,
      rowCount: rows.length,
      oid: null,
      fields: []
    }
  ];
}

describe(EntityRepository.name, () => {
  it('queries the database', async () => {
    const adapter = new FakeAdapter(
      new Map<string, IDbResult>([
        queryResults('SELECT * FROM users;', [
          {
            id: 1,
            email: 'john@doe.com'
          }
        ])
      ])
    );

    const expectedUser = new User({ id: 1, email: 'john@doe.com' });

    const repo = new EntityRepository(adapter, 'users', User);
    const results = await repo.findAll();
    expect(results[0]).toEqual(expectedUser);
  });
});

import { IRepository, EntityRepository } from './repository';
import { IDbAdapter } from './adapter';

export class User {
  id: number;
}

export interface IDBRepository {
  users: IRepository<User>;
}

export class DBRepository implements IDBRepository {
  public users: IRepository<User>;
  public connection: IDbAdapter;

  constructor(connection: IDbAdapter) {
    this.connection = connection;
    this.users = new EntityRepository(connection, 'users', User);
  }
}

export const create = (): IDBRepository => {
  return;
};

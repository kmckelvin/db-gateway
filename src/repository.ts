import { IDbAdapter } from './adapter';

export interface IRepository<T> {
  findAll(query: object): Promise<T[]>;
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  findOr<U>(): Promise<T | U>;
  save(entity: T): Promise<boolean>;
}

type entityConstructor<T> = new (props: object) => T;

export class EntityRepository<T> implements IRepository<T> {
  private table: string;
  private connection: IDbAdapter;
  private EntityType: entityConstructor<T>;

  constructor(
    connection: IDbAdapter,
    table: string,
    newEntity: entityConstructor<T>
  ) {
    this.table = table;
    this.connection = connection;
    this.EntityType = newEntity;
  }

  async findAll(): Promise<T[]>;
  async findAll(query: object): Promise<T[]>;
  async findAll(query?: object): Promise<T[]> {
    const result = await this.connection.query(`SELECT * FROM ${this.table};`);
    return result.rows.map(r => new this.EntityType(r));
  }

  async findOne(id: string) {
    return new this.EntityType({});
  }

  async findOr<U>() {
    return new this.EntityType({});
  }

  async save(entity: T) {
    return true;
  }
}

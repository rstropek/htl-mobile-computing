import {inject, injectable} from 'inversify';
import {ConnectionPool} from 'mssql';

export interface IDataAccess {
  initialize(): Promise<any>;
  readonly connectionPool: ConnectionPool;
  buildQuery(options: IQueryOptions): string;
}

export interface IQueryOptions {
  select: string[];
  from: string;
  where?: string[];
  orderBy?: string[];
  offset?: number;
  fetch?: number;
}

@injectable()
export class DataAccess implements IDataAccess {
  private pool: ConnectionPool;

  constructor() {}

  public async initialize(): Promise<void> {
    this.pool = new ConnectionPool({
      server: 'ng-workshop.database.windows.net',
      database: 'ng-workshop',
      user: 'dev',
      password: process.env.DBPWD,
      options: {encrypt: true}
    });
    await this.pool.connect();
  }

  public get connectionPool(): ConnectionPool {
    return this.pool;
  }

  public buildQuery(options: IQueryOptions): string {
    let query = `SELECT ${options.select.join(',')} FROM ${options.from}`;
    if (options.where && options.where.length > 0) {
      query += ` WHERE ${options.where.join(' AND ')}`;
    }

    if (options.orderBy && options.orderBy.length > 0) {
      query += ` ORDER BY ${options.orderBy.join(',')}`;
      query += ` OFFSET ${options.offset || 0} ROWS`;
      if (options.fetch) {
        query += ` FETCH NEXT ${options.fetch} ROWS ONLY`;
      }
    }

    return query;
  }
}

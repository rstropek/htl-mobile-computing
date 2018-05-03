import * as express from 'express';
import {inject} from 'inversify';
import {controller, httpGet, interfaces} from 'inversify-express-utils';
import {Int, NVarChar, PreparedStatement, Request} from 'mssql';

import {IDataAccess} from '../services/data-access';
import {TYPES} from '../services/services';

@controller('/api/models')
export class ModelsController implements interfaces.Controller {
  constructor(@inject(TYPES.DataAccess) private dal: IDataAccess) {}

  @httpGet('/')
  private async get(
      req: express.Request, res: express.Response, next: express.NextFunction):
      Promise<any> {
    const filters: string[] = [];

    let yearFilter: number;
    if (req.query.year) {
      yearFilter = Number.parseInt(req.query.year);
      if (isNaN(yearFilter)) {
        res.sendStatus(400);
        return;
      }

      filters.push(`year = @year`);
    }

    if (req.query.make) {
      filters.push(`make like '%' + @make + '%'`);
    }

    if (req.query.model) {
      filters.push(`model like '%' + @model + '%'`);
    }

    let offset: number;
    if (req.query.offset) {
      offset = Number.parseInt(req.query.offset);
      if (isNaN(offset)) {
        res.sendStatus(400);
        return;
      }
    }

    let fetch: number = 10;
    if (req.query.fetch) {
      fetch = Number.parseInt(req.query.fetch);
      if (isNaN(fetch) || fetch > 100) {
        res.sendStatus(400);
        return;
      }
    }

    const query = this.dal.buildQuery({
      select: ['v.id', 'v.year', 'v.make', 'v.model', 'case when d.id is null then 0 else 1 end as hasDetails'],
      from: 'VehicleModelYear v left join VehicleModelDetails d on v.id = d.id',
      where: filters,
      orderBy: ['year', 'make', 'model'],
      offset: offset,
      fetch: fetch
    });
    console.log(query);

    let queryRequest = this.dal.connectionPool.request();
    if (yearFilter) {
      queryRequest = queryRequest.input('year', Int, yearFilter);
    }

    if (req.query.make) {
      queryRequest = queryRequest.input('make', NVarChar(100), req.query.make);
    }

    if (req.query.model) {
      queryRequest =
          queryRequest.input('model', NVarChar(100), req.query.model);
    }

    var result = await queryRequest.query(query);
    res.send(result.recordset);
  }
}

import * as express from 'express';
import { inject } from 'inversify';
import { controller, httpGet, interfaces } from 'inversify-express-utils';
import { NVarChar, Request } from 'mssql';

import { IDataAccess } from '../services/data-access';
import { TYPES } from '../services/services';

@controller('/api/makes')
export class MakesController implements interfaces.Controller {
  constructor(@inject(TYPES.DataAccess) private dal: IDataAccess) {}

  @httpGet('/')
  private async get(
      req: express.Request, res: express.Response, next: express.NextFunction):
      Promise<any> {
    const filters: string[] = [];

    if (req.query.make) {
      filters.push(`make like '%' + @make + '%'`);
    }

    const query = this.dal.buildQuery({
      select: ['distinct make'],
      from: 'VehicleModelYear',
      where: filters,
      orderBy: ['make']
    });
    console.log(query);

    let queryRequest = this.dal.connectionPool.request();
    if (req.query.make) {
      queryRequest = queryRequest.input('make', NVarChar(100), req.query.make);
    }

    var result = await queryRequest.query(query);
    res.send(result.recordset.map(row => row.make));
  }
}

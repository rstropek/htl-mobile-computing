import * as express from 'express';
import { inject } from 'inversify';
import { controller, httpGet, interfaces } from 'inversify-express-utils';
import { NVarChar, Request } from 'mssql';

import { IDataAccess } from '../services/data-access';
import { TYPES } from '../services/services';

@controller('/api/years')
export class YearsController implements interfaces.Controller {
  constructor(@inject(TYPES.DataAccess) private dal: IDataAccess) {}

  @httpGet('/')
  private async get(
      req: express.Request, res: express.Response, next: express.NextFunction):
      Promise<any> {
    const query = this.dal.buildQuery({
      select: ['distinct year'],
      from: 'VehicleModelYear',
      orderBy: ['year']
    });
    console.log(query);

    let result = await this.dal.connectionPool.request().query(query);
    res.send(result.recordset.map(row => row.year));
  }
}

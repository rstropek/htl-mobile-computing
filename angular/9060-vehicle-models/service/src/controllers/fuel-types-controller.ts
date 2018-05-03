import * as express from 'express';
import { inject } from 'inversify';
import { controller, httpGet, interfaces } from 'inversify-express-utils';
import { NVarChar, Request } from 'mssql';

import { IDataAccess } from '../services/data-access';
import { TYPES } from '../services/services';

@controller('/api/fuelTypes')
export class FuelTypesController implements interfaces.Controller {
  constructor(@inject(TYPES.DataAccess) private dal: IDataAccess) {}

  @httpGet('/')
  private async get(
      req: express.Request, res: express.Response, next: express.NextFunction):
      Promise<any> {
    const query = this.dal.buildQuery({
      select: ['id', '[description]'],
      from: 'FuelType'
    });

    let result = await this.dal.connectionPool.request().query(query);
    res.send(result.recordset);
  }
}

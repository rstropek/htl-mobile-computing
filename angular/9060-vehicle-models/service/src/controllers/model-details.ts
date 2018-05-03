import * as express from 'express';
import {inject} from 'inversify';
import {controller, httpGet, httpPost, interfaces} from 'inversify-express-utils';
import {params} from 'inversify-express-utils/dts/decorators';
import {Int, NVarChar, Request} from 'mssql';

import {IDataAccess} from '../services/data-access';
import {TYPES} from '../services/services';

export interface IVehicleModelDetails {
  id: number;
  year: number;
  model: string;
  make: string;
  engine: string;
  doors: number;
  maxPower_HP: number;
  maxSpeed_KM_h: number;
  acceleration0to100KMh_s: number;
  fuelTankVolume_L?: number;
  maxTorque_Nm: number;
  cylinders?: number;
  fuelType: number;
  description: string;
  co2emissionMax_g_km?: number;
}

@controller('/api/models')
export class ModelDetailsController implements interfaces.Controller {
  constructor(@inject(TYPES.DataAccess) private dal: IDataAccess) {}

  @httpGet('/:id')
  private async get(
      req: express.Request, res: express.Response, next: express.NextFunction):
      Promise<any> {
    const query = this.dal.buildQuery({
      select: [
        'd.id', 'm.year', 'm.model', 'm.make', 'd.engine', 'd.doors',
        'd.maxPower_HP', 'd.maxSpeed_KM_h', 'd.acceleration0to100KMh_s',
        'd.fuelTankVolume_L', 'd.maxTorque_Nm', 'd.cylinders', 'd.fuelType',
        'f.description as fuelTypeDescription', 'd.co2emissionMax_g_km'
      ],
      from:
          'dbo.VehicleModelDetails as d inner join dbo.VehicleModelYear m on d.id = m.id inner join dbo.FuelType f on f.id = d.fuelType',
      where: ['d.id = @id']
    });

    let result = await this.dal.connectionPool.request()
                     .input('id', Int, req.param('id'))
                     .query(query);
    res.send(result.recordset);
  }

  @httpPost('/:id')
  private async post(
      req: express.Request, res: express.Response, next: express.NextFunction):
      Promise<any> {
    const payload: IVehicleModelDetails = req.body;

    if (!payload.engine || !payload.doors || !payload.maxPower_HP ||
        !payload.maxSpeed_KM_h || !payload.acceleration0to100KMh_s ||
        !payload.maxTorque_Nm || !payload.fuelType) {
      res.send({error: 'Mandatory data missing'}).sendStatus(400);
      return;
    }

    if (payload.fuelType === 1 &&
        (payload.co2emissionMax_g_km || payload.cylinders ||
         payload.fuelTankVolume_L)) {
      res.send({error: 'Invalid data for electric vehicle'}).sendStatus(400);
      return;
    }

    res.sendStatus(201);
  }
}

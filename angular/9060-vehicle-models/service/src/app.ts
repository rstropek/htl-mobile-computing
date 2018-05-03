import 'reflect-metadata';
import './controllers/models-controller';
import './controllers/makes-controller';
import './controllers/years-controller';
import './controllers/fuel-types-controller';
import './controllers/model-details';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import {Container} from 'inversify';
import {InversifyExpressServer} from 'inversify-express-utils';

import {DataAccess, IDataAccess} from './services/data-access';
import {TYPES} from './services/services';

async function run(): Promise<any> {
  try {
    // Configure DI
    const container = new Container();
    container.bind<IDataAccess>(TYPES.DataAccess).to(DataAccess).inSingletonScope();

    // Initialize connection pool to Azure SQL DB
    const dal = container.get<IDataAccess>(TYPES.DataAccess);
    await dal.initialize();

    // Start web server
    const port: (number|string) = process.env.PORT || 8082;
    const server = new InversifyExpressServer(container);
    server.setConfig(app => {
      app.use(bodyParser.json());
      app.use(cors());
    });
    const serverInstance = server.build();
    serverInstance.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (ex) {
    console.error(ex);
  }
}

run();
import {CREATED} from 'http-status-codes';
import * as Datastore from 'nedb';
import {createServer, Next, plugins, Request, Response} from 'restify';
import {BadRequestError, UnauthorizedError} from 'restify-errors';

var server = createServer();
server.use(plugins.bodyParser());
server.use(plugins.authorizationParser());

const db = new Datastore({filename: __dirname + '/db.dat', autoload: true});

function adminFilter(req: Request, res: Response, next: Next) {
  if (!req.authorization || req.authorization.scheme !== 'Basic' ||
      !req.authorization.basic) {
    next(new UnauthorizedError('Missing basic authentication header'));
  } else {
    if (req.authorization.basic.username === 'admin' &&
        req.authorization.basic.password === 'P@ssw0rd!') {
      next();
    } else {
      next(new UnauthorizedError('Invalid username or password'));
    }
  }
}

server.get('/guests', adminFilter, (req, res, next) => {
  db.find({}, (err, guests) => {
    res.send(guests);
  });
});

server.get('/party', (req, res, next) => {
  res.send({
    title: 'Happy new year!',
    location: 'At my home',
    date: new Date(2017, 0, 1)
  });
});

server.post('/register', (req, res, next) => {
  if (!req.body.firstName || !req.body.lastName) {
    next(new BadRequestError('Missing mandatory member(s)'));
  } else {
    db.count({}, (err, count) => {
      if (count < 10) {
        db.insert(
            {firstName: req.body.firstName, lastName: req.body.lastName},
            (err, newDoc) => {
              res.send(CREATED, newDoc);
            });
      } else {
        next(new UnauthorizedError(
            'Sorry, max. number of guests already reached'));
      }
    });
  }
});

server.listen(8080, () => console.log('API is listening'));

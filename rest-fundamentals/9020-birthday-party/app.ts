import {CREATED, BAD_REQUEST, UNAUTHORIZED} from 'http-status-codes';
import * as loki from 'lokijs';
import * as express from 'express';
import * as basic from 'express-basic-auth';

var app = express();
app.use(express.json());

const adminFilter = basic({ users: { admin: 'P@ssw0rd!' }});

const db = new loki(__dirname + '/db.dat', {autosave: true, autoload: true});
let guests = db.getCollection('guests');
if (!guests) {
  guests = db.addCollection('guests');
}

app.get('/guests', adminFilter, (req, res) => {
  res.send(guests.find());
});

app.get('/party', (req, res, next) => {
  res.send({
    title: 'Happy new year!',
    location: 'At my home',
    date: new Date(2017, 0, 1)
  });
});

app.post('/register', (req, res, next) => {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(BAD_REQUEST).send('Missing mandatory member(s)');
  } else {
    const count = guests.count();
    if (count < 10) {
      const newDoc = guests.insert({firstName: req.body.firstName, lastName: req.body.lastName});
      res.status(CREATED).send(newDoc);
    } else {
      res.status(UNAUTHORIZED).send('Sorry, max. number of guests already reached');
    }
  }
});

app.listen(8080, () => console.log('API is listening'));

import * as express from 'express';
import * as cors from 'cors';
import {BAD_REQUEST} from 'http-status-codes';

const app = express();
app.use(cors());

const appointments = [
  { 'start': new Date('2019-01-02T13:00:00'), 'end': new Date('2019-01-02T15:00:00'), 'loc': 'Office', 'desc': 'Project Meeting' },
  { 'start': new Date('2019-01-05T17:00:00'), 'end': new Date('2019-01-05T19:00:00'), 'loc': 'Cinema', 'desc': 'Watch Movie' },
  { 'start': new Date('2019-02-05T14:00:00'), 'end': new Date('2019-02-05T16:00:00'), 'loc': 'School', 'desc': 'Choir' },
  { 'start': new Date('2018-03-15T09:00:00'), 'end': new Date('2018-03-15T10:00:00'), 'loc': 'School', 'desc': 'Learn Node.js' },
  { 'start': new Date('2018-03-27T08:00:00'), 'end': new Date('2018-03-27T18:00:00'), 'loc': 'School', 'desc': 'Basketball Training' }
];

app.get('/api/calendar', (req, res) => {
  let year: number;
  if (req.query.year) {
    year = parseInt(req.query.year);
    if (!year) {
      res.status(BAD_REQUEST).send('Year is not a number');
      return;
    }
  }

  let month: number;
  if (req.query.month) {
    month = parseInt(req.query.month);
    if (!month || month < 1 || month > 12) {
      res.status(BAD_REQUEST).send('Invalid month');
      return;
    }
  }

  res.send(appointments.filter(a => (!year || a.start.getFullYear() === year) &&
    (!month || a.start.getMonth() + 1 === month)));
});

app.get('/api/calendar/years', (req, res) => {
  res.send(Array.from(new Set(appointments.map(a => (<Date>a.start).getFullYear()))));
});

const port = 80;
app.listen(port, () => console.log(`API is listening on port ${port}`));

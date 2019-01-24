import * as express from 'express';
import * as cors from 'cors';
import {BAD_REQUEST, CONFLICT, CREATED, NO_CONTENT, NOT_FOUND} from 'http-status-codes';

const app = express();
app.use(express.json());
app.use(cors());

interface IAppointment {
  id: number;
  start: (string | Date);
  end: (string | Date);
  loc: string;
  desc: string;
}

const appointments: IAppointment[] = [];

app.post("/api/calendar", (req, res) => {
  const payload: IAppointment = req.body;
  if (!payload.start || !payload.end || !payload.desc) {
    res.status(BAD_REQUEST).send('Missing mandatory parameters in appointment');
    return;
  }

  const start = Date.parse(<string>payload.start);
  const end = Date.parse(<string>payload.end);
  if (!start || !end || end < start) {
    res.status(BAD_REQUEST).send('End must be after start');
    return;
  }

  payload.start = new Date(start);
  payload.end = new Date(end);

  if (appointments.filter(a => (a.start >= payload.start && a.start <= payload.end) ||
    (a.end >= payload.start && a.end <= payload.end)).length > 0) {
    res.status(CONFLICT).send('Overlapping appointments no allowed');
    return;
  }

  payload.id = appointments.length === 0 ? 1 : appointments.map(a => a.id).reduce((acc, curr) => Math.max(acc, curr)) + 1;

  appointments.push(payload);
  res.status(CREATED).send(payload);
});

app.get("/api/calendar", (req, res) => {
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

  res.send(appointments.filter(a => (!year || (<Date>a.start).getFullYear() === year) &&
    (!month || (<Date>a.start).getMonth() + 1 === month)));
});

app.get("/api/calendar/years", (req, res) => {
  res.send(Array.from(new Set(appointments.map(a => (<Date>a.start).getFullYear()))));
});

app.delete("/api/calendar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(BAD_REQUEST).send('Invalid id');
    return;
  }

  const index = appointments.findIndex(a => a.id === id);
  if (index === (-1)) {
    res.status(NOT_FOUND).send();
    return;
  }

  appointments.splice(index, 1);

  res.status(NO_CONTENT).send();
});

const port = 8080;
app.listen(port, () => console.log(`API is listening on port ${port}`));

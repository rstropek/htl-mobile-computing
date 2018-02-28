import * as cors from '@koa/cors'
import {BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND} from 'http-status-codes';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';

interface IPerson {
  name: string;
}

interface ITodoItem {
  id: number;
  assignedTo?: string;
  description: string;
  done?: boolean
}

const people: IPerson[] = [{name: 'Adam'}, {name: 'Eve'}];
const todos: ITodoItem[] = [];
let lastId = 0;

const router = new Router();

router.get('/api/people', async (context) => {
  // Return people
  context.body = people;
});

router.get('/api/todos', async (context) => {
  // Return todo items
  context.body = todos;
});

router.get('/api/todos/:id', async (context) => {
  // Check if todo item exists
  const todoItem = todos.find(i => i.id == context.params.id);
  if (!todoItem) {
    context.status = NOT_FOUND;
  } else {
    context.body = todoItem;
  }
});

router.post('/api/todos', async (context) => {
  const body = context.request.body;

  if (!body.description) {
    // description field is mandatory
    context.status = BAD_REQUEST;
    context.body = {description: 'Missing description'};
    return;
  }

  const newItem: ITodoItem = {id: lastId++, description: body.description};

  // Check if assigned-to person exists
  if (body.assignedTo) {
    if (people.find(p => p.name === body.assignedTo)) {
      newItem.assignedTo = body.assignedTo;
    } else {
      context.status = NOT_FOUND;
      context.body = {description: 'Unknown person'};
      return;
    }
  }

  todos.push(newItem);

  context.set('location', `/api/todos/${newItem.id}`);
  context.status = CREATED;
  context.body = newItem;
});

router.patch('/api/todos/:id', async (context) => {
  // Check if todo item exists
  const todoItem = todos.find(i => i.id == context.params.id);
  if (!todoItem) {
    context.status = NOT_FOUND;
    return;
  }

  const body = context.request.body;

  // Update description if specified
  if (body.description) {
    todoItem.description = body.description;
  }

  // Update done if specified
  if (body.done === true || body.done === false) {
    todoItem.done = body.done;
  }

  // Update assigned-to if specified
  if (body.assignedTo) {
    // Check if assigned-to person exists
    if (people.find(p => p.name === body.assignedTo)) {
      todoItem.assignedTo = body.assignedTo;
    } else {
      context.status = NOT_FOUND;
      context.body = {description: 'Unknown person'};
      return;
    }
  }

  context.body = todoItem;
});

router.delete('/api/todos/:id', async (context) => {
  // Check if todo item exists
  const todoItemIndex = todos.findIndex(i => i.id == context.params.id);
  if (todoItemIndex === (-1)) {
    context.status = NOT_FOUND;
    return;
  }

  todos.splice(todoItemIndex, 1);

  context.status = NO_CONTENT;
});

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(8080);

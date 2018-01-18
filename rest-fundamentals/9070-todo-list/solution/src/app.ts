import {CREATED, NOT_FOUND, OK} from 'http-status-codes';
import {createServer, plugins, Request, Response} from 'restify';
import * as Datastore from 'nedb';

var server = createServer();
server.use(plugins.bodyParser());

const db = new Datastore({filename: __dirname + '/db.dat', autoload: true});

interface IToDoItem {
    _id?: string;
    description: string;
    done: boolean;
}

server.get('/api/toDoItems', (req: Request, res: Response) => {
    db.find({}, (_, items) => res.send(items));
});

server.post('/api/toDoItems', (req: Request, res: Response) => {
    const newItem: IToDoItem = {
        description: req.body,
        done: false
    };
    db.insert(newItem, (_, item: IToDoItem) => {
        res.header('Location', `/api/toDoItems/${item._id}`);
        res.send(CREATED, item);
    });
});

server.get('/api/toDoItems/:id', (req: Request, res: Response) => {
    db.find({ _id: req.params.id}, 
        (_, items: IToDoItem[]) => res.send(items.length ? items[0] : NOT_FOUND));
});

server.post('/api/toDoItems/:id/setDone', (req: Request, res: Response) => {
    db.update({ _id: req.params.id }, { $set: { done: true } }, {}, 
        (_, numUpdated) => res.send(numUpdated ? OK : NOT_FOUND));
});

server.listen(8080, () => console.log('API is listening'));
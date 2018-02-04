import { BAD_REQUEST, CREATED } from 'http-status-codes';
import * as restify from 'restify';
import { addCustomer, getAllCustomers, ICustomer } from './customers';

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/api/customers', (req, res) => res.send(getAllCustomers()));
server.post('/api/customers', (req, res) => {
    if (req.body && req.body.firstName && req.body.lastName) {
        var newCustomer: ICustomer = { firstName: req.body.firstName.toString(), lastName: req.body.lastName.toString() };
        addCustomer(newCustomer);
        res.send(CREATED);
    } else {
        res.send(BAD_REQUEST);
    }
});

server.listen(8080, () => console.log('API is listening...'));

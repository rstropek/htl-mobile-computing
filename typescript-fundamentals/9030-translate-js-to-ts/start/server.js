var sc = require('http-status-codes');
var restify = require('restify');
var customers = require('./customers');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/api/customers', (req, res) => res.send(customers.getAllCustomers()));
server.post('/api/customers', (req, res) => {
    if (req.body && req.body.firstName && req.body.lastName) {
        var newCustomer = { firstName: req.body.firstName.toString(), lastName: req.body.lastName.toString() };
        customers.addCustomer(newCustomer);
        res.send(sc.CREATED);
    } else {
        res.send(sc.BAD_REQUEST);
    }
});

server.listen(8080, () => console.log('API is listening...'));

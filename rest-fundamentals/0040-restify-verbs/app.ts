import {createServer, plugins} from 'restify';

import {deleteSingle} from './delete-single';
import {getAll} from './get-all';
import {getSingle} from './get-single';
import {post} from './post';

var server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.get('/api/customers', getAll);
server.post('/api/customers', post);
server.get('/api/customers/:id', getSingle);
server.del('/api/customers/:id', deleteSingle);

server.listen(8080, () => console.log('API is listening'));
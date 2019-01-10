// If you have problems with the following line, try:
// import express = require('express');
import * as express from 'express';

import {deleteSingle} from './delete-single';
import {getAll} from './get-all';
import {getSingle} from './get-single';
import {post} from './post';

const app = express();
app.use(express.json());

// Add routes
app.get('/api/customers', getAll);
app.post('/api/customers', post);
app.get('/api/customers/:id', getSingle);
app.delete('/api/customers/:id', deleteSingle);

app.listen(8080, () => console.log('API is listening on port 8080'));
import express = require('express');
import path = require('path');
import { getDrawing, postIsTipValid, postCalculateResult } from './handlers';

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/api/drawing', getDrawing);
app.post('/api/isTipValid', postIsTipValid);
app.post('/api/calculateResult', postCalculateResult);

const port = 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

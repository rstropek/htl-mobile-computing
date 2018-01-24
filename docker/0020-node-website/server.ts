import * as express from 'express';
const app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', {title: 'Docker Demo', message: `Hello from ${ process.env.GREETER || 'TypeScript' }!`})
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));

import {BAD_REQUEST, CREATED, NOT_FOUND, OK} from 'http-status-codes';
import {createServer, plugins, Request, Response} from 'restify';

import {HangmanLogic} from './hangman-logic';

var server = createServer();
server.use(plugins.bodyParser());

const games: HangmanLogic[] = [];
let numberOfGuesses: number[] = [];

server.post('/hangman-game', (req: Request, res: Response) => {
  numberOfGuesses.push(0);
  res.send({gameId: games.push(new HangmanLogic()) - 1});
});

server.post('/hangman-game/:gameId', (req: Request, res: Response) => {
  const gameId = parseInt(req.params.gameId);
  const occurences = games[gameId].guess(req.body);
  numberOfGuesses[gameId]++;
  res.send({
    occurences: occurences,
    wordToGuess: games[gameId].word,
    numberOfGuesses: numberOfGuesses[gameId]
  });
});

server.get('/hangman-game/:gameId', (req: Request, res: Response) => {
  const gameId = parseInt(req.params.gameId);
  res.send({
    wordToGuess: games[gameId].word,
    numberOfGuesses: numberOfGuesses[gameId]
  });
});

server.listen(8080, () => console.log('API is listening'));
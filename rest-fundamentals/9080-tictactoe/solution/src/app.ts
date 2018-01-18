import {BAD_REQUEST, OK} from 'http-status-codes';
import {createServer, plugins, Request, Response} from 'restify';

var server = createServer();
server.use(plugins.bodyParser());
server.use(plugins.queryParser());

function getWinner(board: string[]): string {
  for (var row = 0; row < 3; row++) {
    if (board[row * 3] && board[row * 3] === board[row * 3 + 1] &&
        board[row * 3] === board[row * 3 + 2]) {
      return board[row * 3];
    }
  }

  for (var column = 0; column < 3; column++) {
    if (board[column] && board[column] === board[3 + column] &&
        board[column] === board[2 * 3 + column]) {
      return board[column];
    }
  }

  if (board[0] && board[0] === board[3 + 1] && board[0] === board[2 * 3 + 2]) {
    return board[0];
  }

  if (board[2] && board[2] === board[3 + 1] && board[2] === board[2 * 3]) {
    return board[1];
  }

  return null;
}

server.post('/api/getWinner', (req: Request, res: Response) => {
  if (req.body && Array.isArray(req.body) && req.body.length === 9) {
    res.send({winner: getWinner(req.body)});
  } else {
    res.send(BAD_REQUEST);
  }
});

server.get('/api/getWinner', (req: Request, res: Response) => {
    if (req.query.board) {
      const board: string[] = req.query.board.toString().split(',');
      if (board.length === 9) {
        res.send({winner: getWinner(board)});
        return;
      }
    }

    res.send(BAD_REQUEST);
  });
  
server.listen(8080, () => console.log('API is listening'));
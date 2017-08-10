const board: boolean[][] = [];

function countNeighbors(row: number, col: number): number {
  let neighbors = 0;
  if (row > 0) {
    if (col > 0 && board[row - 1][col - 1]) neighbors++;
    if (board[row - 1][col]) neighbors++;
    if (col < 999 && board[row - 1][col + 1]) neighbors++;
  }

  if (col > 0 && board[row][col - 1]) neighbors++;
  if (board[row][col]) neighbors++;
  if (col < 999 && board[row][col + 1]) neighbors++;

  if (row < 999) {
    if (col > 0 && board[row + 1][col - 1]) neighbors++;
    if (board[row + 1][col]) neighbors++;
    if (col < 999 && board[row + 1][col + 1]) neighbors++;
  }

  return neighbors;
}

function init() {
  for (let row = 0; row < 1000; row++) {
    const boardRow: boolean[] = [];
    for (let col = 0; col < 1000; col++) {
      boardRow.push(Math.random() >= 0.985);
    }

    board.push(boardRow);
  }

  window.requestAnimationFrame(draw);
}

function draw() {
  for (let row = 0; row < 1000; row++) {
    for (let col = 0; col < 1000; col++) {
      const neighbors = countNeighbors(row, col);
      if (!board[row][col] && neighbors === 3) board[row][col] = true;
      if (board[row][col] && (neighbors < 2 || neighbors > 3))
        board[row][col] = false;
    }
  }

  const canvas = <HTMLCanvasElement>document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1000, 1000);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  for (let row = 0; row < 1000; row++) {
    for (let col = 0; col < 1000; col++) {
      if (board[row][col]) {
        ctx.fillRect(col, row, 1, 1);
      }
    }
  }

  window.requestAnimationFrame(draw);
}

init();

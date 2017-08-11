window.onload = () => {
  const board: number[][] = [];
  const boardSize = 800;
  const pixelSize = 4;
  const numberOfCols = boardSize / pixelSize;
  const numberOfRows = boardSize / pixelSize;
  const percAlive = 3 / 100;

  const canvas = <HTMLCanvasElement>document.getElementById('canvas');
  canvas.width = canvas.height = boardSize;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';

  for (let row = 0; row < numberOfRows; row++) {
    const boardRow: number[] = [];
    for (let col = 0; col < numberOfCols; col++) {
      boardRow.push((Math.random() < percAlive) ? 1 : 0);
    }

    board.push(boardRow);
  }

  window.requestAnimationFrame(draw);

  function countNeighbors(row: number, col: number): number {
    let neighbors = 0;
    const beginRow = (row > 0) ? (row - 1) : row;
    const endRow = (row < (numberOfRows - 1)) ? (row + 1) : row;
    const beginCol = (col > 0) ? (col - 1) : col;
    const endCol = (col < (numberOfCols - 1)) ? (col + 1) : col;
    for (let currentRow = beginRow; currentRow <= endRow; currentRow++) {
      for (let currentCol = beginCol; currentCol <= endCol; currentCol++) {
        neighbors += board[currentRow][currentCol];
        if (neighbors > 3) {
          break;
        }
      }
    }

    return neighbors;
  }

  function draw() {
    for (let row = 0; row < numberOfRows; row++) {
      for (let col = 0; col < numberOfCols; col++) {
        const neighbors = countNeighbors(row, col);
        if (!board[row][col] && neighbors === 3) {
          board[row][col] = 1;
          continue;
        }

        if (board[row][col] && (neighbors < 2 || neighbors > 3)) {
          board[row][col] = 0;
        }
      }
    }

    ctx.clearRect(0, 0, boardSize, boardSize);
    for (let row = 0; row < numberOfRows; row++) {
      for (let col = 0; col < numberOfCols; col++) {
        if (board[row][col]) {
          ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
        }
      }
    }

    window.requestAnimationFrame(draw);
  }
};
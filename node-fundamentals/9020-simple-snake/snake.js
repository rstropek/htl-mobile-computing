var ansi = require('ansi');
var keypress = require('keypress');

keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

var cursor = ansi(process.stdout);
var width = 40;
var height = 20;
var posX = 0;
var posY = 0;
var applePosX = 0;
var applePosY = 0;
var dirX = 1;
var dirY = 0;
var points = 0;
var speed = 3;

try {
    process.stdout.write('\x1Bc');
    process.stdout.write('\x1B[?25l');

    cursor.bg.grey();
    drawHorizontalLine(1, 1, width);
    drawHorizontalLine(1, height, width);
    drawVerticalLine(1, 1, height);
    drawVerticalLine(width, 1, height);
    cursor.bg.reset();

    process.stdin.on('keypress', handleInput);

    posX = Math.floor(width / 2);
    posY = Math.floor(height / 2);

    drawApple();

    gameLoop();
} catch (ex) {
    console.log(ex.toString());
    quitGame();
}

function gameLoop() {
    removeSnake(posX, posY);

    posX = posX + dirX;
    posY = posY + dirY;

    if (posX == 1 || posX == width || posY == 1 || posY == height) {
        cursor.red();
        cursor.bg.white();
        setText(width / 2 - 6, height / 2, "  GAME OVER  ");
        quitGame();
    }

    if (posX == applePosX && posY == applePosY) {
        points++;

        if (speed < 20) {
            speed++;
        }

        drawApple();
    }

    drawSnake();

    setTimeout(gameLoop, 1000 / speed);
}

function quitGame() {
    cursor.reset();
    cursor.bg.reset();
    process.stdout.write('\x1B[?25h');
    cursor.goto(1, height + 4);
    process.exit();
}

function handleInput(chunk, key) {
    if (key.name == 'q') {
        quitGame();
    } else if (key.name == 'right') {
        dirX = 1;
        dirY = 0;
    } else if (key.name == 'left') {
        dirX = -1;
        dirY = 0;
    } else if (key.name == 'up') {
        dirX = 0;
        dirY = -1;
    } else if (key.name == 'down') {
        dirX = 0;
        dirY = 1;
    }
}

function drawApple() {
    applePosX = Math.ceil(Math.random() * (width - 2)) + 1;
    applePosY = Math.ceil(Math.random() * (height - 2)) + 1;

    cursor.bg.red();
    drawPoint(applePosX, applePosY);
    cursor.bg.reset();

    setText(1, height + 2, "Points: " + points.toString());
    setText(1, height + 3, "Speed: " + speed.toString());
}

function removeSnake() {
    cursor.bg.black();
    drawPoint(posX, posY);
    cursor.bg.reset();
}

function drawSnake() {
    cursor.bg.green();
    drawPoint(posX, posY);
    cursor.bg.reset();
}

function drawPoint(col, row) {
    cursor.goto(col, row).write(' ');
}

function drawHorizontalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col + i, row).write(' ');
    }
}

function drawVerticalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col, row + i).write(' ');
    }
}

function setText(col, row, text) {
    cursor.goto(col, row).write(text);
}

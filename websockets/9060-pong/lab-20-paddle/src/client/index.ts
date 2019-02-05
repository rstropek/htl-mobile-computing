/**************************************************************************
  Demo for controlling the paddle with cursor keys and touch

  NOTE: This code has not been optimized for size or speed. It was written
        with ease of understanding in mind.
**************************************************************************/
window.addEventListener('load', async () => {
  // Get some information about the paddle. This information will never change.
  // So it makes sense to get it only once to make the rest of the program faster.
  const paddle = <HTMLDivElement>document.getElementsByClassName('paddle')[0];
  const paddleHeight = paddle.clientHeight;
  const paddleHalfHeight = paddleHeight / 2;
  let currentPaddlePosition = paddle.clientTop;

  // Controls the speed of the movement (number of pixels per interval)
  const speed = 1;

  // Two helper variables that contain values during movement with cursor
  // keys. If currently not movement is happening, they are undefined.
  let interval: NodeJS.Timeout;
  let direction: number;

  // Listen to keydown event
  document.addEventListener('keydown', event => {
    // We have to check whether a movement is already in progress. This is
    // necessary because keydown events arrive often when key is
    // continuously pressed.
    if (!interval) {
      switch (event.code) {
        case 'ArrowDown':
          direction = speed;
          startMoving();
          break;
        case 'ArrowUp':
          direction = speed * -1;
          startMoving();
          break;
      }
    }
  });

  // Listen to keyup event
  document.addEventListener('keyup', event => {
    switch (event.code) {
      case 'ArrowDown':
      case 'ArrowUp':
        stopMoving();
        break;
    }
  });

  // Setup handler for touch displays (pan operation)
  const hammertime = new Hammer(paddle);
  hammertime.get('pan').set({ direction: Hammer.DIRECTION_DOWN | Hammer.DIRECTION_UP });
  hammertime.on('pan', ev => 
    // Put center of paddle to the center of the user's finger
    movePaddle(ev.center.y - paddleHalfHeight));

  /** Helper function that starts movement when keydown happens */
  function startMoving() {
    // Move paddle every 4ms
    interval = setInterval(() => movePaddle(currentPaddlePosition + direction), 4);
  }

  /** Helper function that stops movement when keyup happens */
  function stopMoving() {
    clearInterval(interval);
    interval = direction = undefined;
  }

  /**
   * Helper function that moves the paddle to a given position
   * @param targetPosition Target position. No movement is done if target position is invalid
   */
  function movePaddle(targetPosition: number): void {
    if (targetPosition >= 0 && (targetPosition + paddleHeight) <= document.documentElement.clientHeight) {
      currentPaddlePosition = targetPosition;

      // Note the 'px' at the end of the coordinates for CSS. Don't
      // forget it. Without the 'px', it doesn't work.
      paddle.style.setProperty('top', `${currentPaddlePosition}px`);
    }
  }
});

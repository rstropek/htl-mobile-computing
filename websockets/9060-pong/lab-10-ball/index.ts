/**************************************************************************
  NOTE: Take a look at ball-animation-concept.svg/.png to get a better
        understanding of the calculation logic of the ball movement.

        This code has not been optimized for size or speed. It was written
        with ease of understanding in mind.
**************************************************************************/
window.addEventListener("load", async () => {
  /** Represents a 2d point */
  interface Point {
    x: number;
    y: number
  };
  
  /** Represents the size of a 2d object */
  interface Size {
    width: number;
    height: number;
  }
  
  /** Represents directions  */
  enum Direction { top, right, bottom, left };

  // Get some information about the browser window and the ball. This information will
  // never change. So it makes sense to get it only once to make the rest of the program faster.
  const ball = document.getElementById('ball');
  const ballSize: Size = { width: ball.clientWidth, height: ball.clientHeight };
  const ballHalfSize = splitSize(ballSize, 2);
  const clientSize: Size = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight };
  const clientHalfSize = splitSize(clientSize, 2);

  // Move ball to center of the screen
  let ballCurrentPosition: Point = { x: clientHalfSize.width, y: clientHalfSize.height };
  moveBall(ballCurrentPosition);

  // Calculate the random angle that the ball should initially travel.
  // Should be an angle between 27.5 and 45 DEG (=PI/8 and PI/4 RAD)
  const angle = Math.PI / 8 + Math.random() * Math.PI / 8;

  // Calculate the random quadrant into which the ball should initially travel.
  // 0 = upper right, 1 = lower right, 2 = lower left, 3 = upper left
  let quadrant = Math.floor(Math.random() * 4);

  do {
    // Calculate target.
    // X-coordinate iw either right or left border of browser window (depending on
    //              target quadrant)
    // y-coordinate is calculated using tangens angle function of angle
    //              (note: tan(angle) = delta-y / delta-x). The sign depends on
    //              the target quadrant)
    const targetX = (quadrant === 0 || quadrant === 1) ? clientSize.width - ballSize.width : 0;
    const targetBallPosition: Point = {
      x: targetX,
      y: ballCurrentPosition.y + Math.tan(angle) * Math.abs(targetX - ballCurrentPosition.x) * ((quadrant === 0 || quadrant === 3) ? -1 : 1)
    };

    // Animate ball to calculated target position
    const borderTouch = await animateBall(ballCurrentPosition, targetBallPosition);

    // Based on where the ball touched the browser window, we change the new target quadrant.
    // Note that in this solution the angle stays the same.
    switch (borderTouch.touchDirection) {
      case Direction.left: 
        quadrant = (quadrant === 2) ? 1 : 0;
        break;
      case Direction.right:
        quadrant = (quadrant === 0) ? 3 : 2;
        break;
      case Direction.top:
        quadrant = (quadrant === 0) ? 1 : 2;
        break;
      case Direction.bottom:
        quadrant = (quadrant === 2) ? 3 : 0;
        break;
      default:
        throw new Error('Invalid direction, should never happen');
    }

    // The touch position is the new current position of the ball.
    // Note that we fix the position here slightly in case a small piece of the ball has reached an area
    // outside of the visible browser window.
    ballCurrentPosition.x = Math.min(Math.max(borderTouch.touchPosition.x - ballHalfSize.width, 0) + ballHalfSize.width, clientSize.width);
    ballCurrentPosition.y = Math.min(Math.max(borderTouch.touchPosition.y - ballHalfSize.height, 0) + ballHalfSize.height, clientSize.height);
  } while (true); // Forever

  /**
   * Animate the ball from the current position to the target position. Stops
   * animation if border of browser window is reached.
   * @returns Position and direction where ball touched the border of the browser window
   *          at the end of the animation
   */
  function animateBall(currentBallPosition: Point, targetBallPosition: Point): Promise<{touchPosition: Point, touchDirection: Direction}> {
    // Calculate x and y distances from current to target position
    const distanceToTarget: Size = subtractPoints(targetBallPosition, currentBallPosition);

    // Use Pythagoras to calculate distance from current to target position
    const distance = Math.sqrt(distanceToTarget.width * distanceToTarget.width + distanceToTarget.height * distanceToTarget.height);

    // Variable defining the speed of the animation (pixels that the ball travels per interval)
    const pixelsPerInterval = 1;

    // Calculate distance per interval
    const distancePerInterval = splitSize(distanceToTarget, distance * pixelsPerInterval);

    // Return a promise that will resolve when animation is done
    return new Promise<{touchPosition: Point, touchDirection: Direction}>(res => {
      // Start at current ball position
      let animatedPosition: Point = currentBallPosition;

      // Move point every 4ms
      const interval = setInterval(() => {
        // Move animated position by the distance it has to travel per interval
        animatedPosition = movePoint(animatedPosition, distancePerInterval);

        // Move the ball to the new position
        moveBall(animatedPosition);

        // Check if the ball touches the browser window's border
        let touchDirection: Direction;
        if ((animatedPosition.x - ballHalfSize.width) < 0) { touchDirection = Direction.left; }
        if ((animatedPosition.y - ballHalfSize.height) < 0) { touchDirection = Direction.top; }
        if ((animatedPosition.x + ballHalfSize.width) > clientSize.width) { touchDirection = Direction.right; }
        if ((animatedPosition.y + ballHalfSize.height) > clientSize.height) { touchDirection = Direction.bottom; }

        if (touchDirection !== undefined) {
          // Ball touches border -> stop animation
          clearInterval(interval);
          res({ touchPosition: animatedPosition, touchDirection: touchDirection });
        }
      }, 4);
    });
  }

  /** Move the center of the ball to given position **/
  function moveBall(targetPosition: Point): void {
      // Note the 'px' at the end of the coordinates for CSS. Don't
      // forget it. Without the 'px', it doesn't work.
      const leftPos = `${targetPosition.x - ballHalfSize.width}px`;
      const topPos = `${targetPosition.y - ballHalfSize.height}px`;

      if (ball.style.left !== leftPos) {
        ball.style.setProperty('left', leftPos);
      }

      if (ball.style.top !== topPos) {
        ball.style.setProperty('top', topPos);
      }
  }

  /** Subtracts two points and returns the size between them */
  function subtractPoints(a: Point, b: Point): Size {
    return {
      width: a.x - b.x,
      height: a.y - b.y
    };
  }

  /** Moves a point by the given size */
  function movePoint(p: Point, s: Size): Point {
    return {
      x: p.x + s.width,
      y: p.y + s.height
    };
  }

  /** Divides the width and height of the given size by the given divider */
  function splitSize(s: Size, divider: number): Size {
    return {
      width: s.width / divider,
      height: s.height / divider
    };
  }
});
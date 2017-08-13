(() => {
  const svg = Snap('#tree');

  const angleChange = 20;
  const lengthChange = 77 / 100;
  const angleRandomness = 15;
  const lengthRandomness = 10;
  const maxLayers = 12;

  drawTree();

  function drawTree(): void {
    svg.clear();
    drawBranch(300, 500, -90, 100, 0);
  }

  function degreeToRad(degree: number): number {
    return degree * Math.PI / 180.0;
  }

  function drawBranch(
      x1: number, y1: number, angle: number, length: number,
      layer: number): void {
    if (layer < maxLayers) {
      const x2 = x1 + (Math.cos(degreeToRad(angle)) * length);
      const y2 = y1 + (Math.sin(degreeToRad(angle)) * length);

      const branch = svg.line(x1, y1, x2, y2);
      branch.attr({
        stroke: tinycolor('#001100').lighten(layer * 3).toString(),
        strokeWidth: maxLayers - layer
      });

      drawBranch(
          x2, y2, angle - angleChange + (Math.random() - 0.5) * angleRandomness,
          length * lengthChange + (Math.random() - 0.5) * lengthRandomness,
          layer + 1);
      drawBranch(
          x2, y2, angle + angleChange + (Math.random() - 0.5) * angleRandomness,
          length * lengthChange + (Math.random() - 0.5) * lengthRandomness,
          layer + 1);
    }
  }
})();

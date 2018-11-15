import * as $ from 'jquery';

function createSvgElement(tag: string): SVGElement {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

export function drawChart(svgId: string): void {
  const svg = $(svgId);
  svg.append($(createSvgElement('line')).attr({ x1: 0, y1: 0, x2: 100, y2: 100}));
  svg.append($(createSvgElement('path')).attr({d: 'M10,10 H20 V20 L30,50 H40 V60'}));
}



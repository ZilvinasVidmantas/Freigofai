/*
  class is a template for an object.

*/

// Template
class Coordinate2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  print() {
    console.log(`(${this.x}, ${this.y})`);
  }

  calcDistanceToOrigin() {
    const deltaX = Math.abs(this.x);
    const deltaY = Math.abs(this.y);
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }

  calcDistanceTo(otherPoint) {
    const deltaX = Math.abs(this.x - otherPoint.x);
    const deltaY = Math.abs(this.y - otherPoint.y);
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
}

// Object of a template
const a = new Coordinate2D(0, 0);
const b = new Coordinate2D(2, 1);
const c = new Coordinate2D(2, -2);
const d = new Coordinate2D(4, 4);
const e = new Coordinate2D(-4, -2);
const points = [a, b, c, d, e];

console.group("Coordinates");
{
  for (let i = 0; i < points.length; i++) {
    const currentCoordinate = points[i];
    currentCoordinate.print();
  }
}
console.groupEnd();
console.log();

console.group("Distances to origin");
{
  const pointsDistancesToOrigin = [];
  for (let i = 0; i < points.length; i++) {
    const currentCoordinate = points[i];
    const distanceToOrigin = currentCoordinate.calcDistanceToOrigin();
    pointsDistancesToOrigin.push(distanceToOrigin);
  }
  console.log(pointsDistancesToOrigin);
}
console.groupEnd();
console.log();

/* using calcDistanceTo method, calc distances:
  * ab
  * ac
  * ad
  * ae
  * bc
  * bd
  * be
  * cd
  * ce
  * de
*/

// Think a smart way to do it with for cycle, or maybe 2 for cycles?
console.group("Distances between points");
{
  const points = [a, b, c, d, e];
  const pointNames = ['a', 'b', 'c', 'd', 'e'];
  const distancesBetweenPoints = {};
  for (let from = 0; from < pointNames.length - 1; from++) {
    const pointNameFrom = pointNames[from];
    const pointFrom = points[from];
    for (let to = from + 1; to < pointNames.length; to++) {
      const pointNameTo = pointNames[to];
      const pointTo = points[to];
      const pointName = pointNameFrom + pointNameTo;
      const distance = pointFrom.calcDistanceTo(pointTo);
      distancesBetweenPoints[pointName] = distance;
    }
  }
  console.log(distancesBetweenPoints)
}
console.groupEnd();
console.log();

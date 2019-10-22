`use strict`
//ES6
class Garden {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }

  circumference() {
    return (this.width + this.length) * 2;
  }
  efficiency() {
    return `the area is ${this.area()} and the circumference is ${this.circumference()}`;
  }
}

const garden = new Garden(4,5);
console.log(garden.efficiency());


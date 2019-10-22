`use strict`

function Garden(width, length) {
  this.width = width;
  this.length = length;
}

Garden.prototype.area = function() {
  console.log(this.width * this.length);
  return this.width * this.length;
}

Garden.prototype.circumference = function() {
  var cir = (this.width + this.length) * 2
  return cir;
}

Garden.prototype.efficiency = function() {
  console.log(`the area is ` + this.area() + `and the circumference is ` + this.circumference());
}

function Playground(width, length, toys) {
  Garden.call(this, width, length);
  this.toys = toys;
}

Playground.prototype = Object.create(Garden.prototype);
Playground.prototype.constructor = Garden;

Playground.prototype.add = function(toy) {
  this.toys.push(toy);
}
function Apple(type) {
  this.type = type;
  this.color = 'red';
}

Apple.prototype.getInfo = function() {
  return this.color + ' ' + this.type + ' apple';
};

var apple = new Apple(`red apple`).getInfo();
console.log(apple);


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

var garden = new Garden(4,5);
console.log(garden.efficiency());



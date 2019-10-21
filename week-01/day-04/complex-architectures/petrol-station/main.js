class Station {
  constructor(gasAmount = 500) {
    this.gasAmount = gasAmount;
  }
  refill(car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car {
  constructor(gasAmount = 0, capacity = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

const stationOne = new Station();
const carOne = new Car();
console.log(stationOne);
console.log(carOne);
stationOne.refill(carOne);
console.log(stationOne);
console.log(carOne);

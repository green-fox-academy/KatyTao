`use strict`;
class Garden {
  constructor() {
    this.plants = [];
  }
  waterPlants(amount) {
    console.log(`Watering with ${amount}`);
    this.water = amount / this.plants.length;
    this.plants.forEach(plant => {
      plant.water(this.water);
      plant.getInfo();
    });
  }
  add(plant) {
    this.plants.push(plant);
    plant.getInfo();
  }
}

class Flower {
  constructor(name, waterAmount = 0) {
    this.name = name;
    this.waterAmount = waterAmount;
  }
  getInfo() {
    console.log(
      `The ${this.name} ${this.waterAmount < 5 ? `needs` : `doesnt need`} water`
    );
  }
  water(waterAdd) {
    this.waterAmount += waterAdd * 0.75;
  }
}

class Tree {
  constructor(name, waterAmount = 0) {
    this.name = name;
    this.waterAmount = waterAmount;
  }
  getInfo() {
    console.log(
      `The ${this.name} ${
        this.waterAmount < 10 ? `needs` : `doesnt need`
      } water`
    );
  }
  water(waterAdd) {
    this.waterAmount += waterAdd * 0.4;
  }
}

const newGarden = new Garden();
const yellowFlower = new Flower(`yellow Flower`, 0);
const blueFlower = new Flower(`blue Flower`, 0);
const purple = new Tree(`purple`, 0);
const orange = new Tree(`oragne`, 0);
newGarden.add(yellowFlower);
newGarden.add(blueFlower);
newGarden.add(purple);
newGarden.add(orange);
newGarden.waterPlants(40);
newGarden.waterPlants(70);

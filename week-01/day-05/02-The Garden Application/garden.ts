`use strict`;
import Flower from "./flower";
import Tree from "./tree";
import Plants from "./plants";
class TheGarden {
  public plants: Plants[];
  constructor() {
    this.plants = [];
  }

  public waterPlants(amount: number): void {
    console.log(`Watering with ${amount}`);
    const needsWaterPlants = this.plants.filter((plant: Plants) =>
      plant.needsWater()
    ).length;
    this.plants
      .filter((plant: Plants) => plant.needsWater())
      .forEach((item: Plants) => {
        item.water(amount / needsWaterPlants);
      });
    console.log(
      this.plants.forEach((plant: Plants) => {
        plant.getInfo();
      })
    );
  }

  public add(plant: Plants) {
    this.plants.push(plant);
    plant.getInfo();
  }
}

const newGarden = new TheGarden();
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

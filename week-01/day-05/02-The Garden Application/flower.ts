import Plants from "./plants";

`use strict`;
export default class Flower extends Plants {
  constructor(name: string, waterAmount: number) {
    super(name, waterAmount);
    this.absorbWater = 0.75;
    this.minimumWater = 5;
  }
}

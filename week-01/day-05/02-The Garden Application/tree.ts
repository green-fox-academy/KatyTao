import Plants from "./plants";

`use strict`;
export default class Tree extends Plants {
  constructor(name: string, waterAmount: number) {
    super(name, waterAmount);
    this.absorbWater = 0.4;
    this.minimumWater = 10;
  }
}

`use strict`;
export default class Plants {
  public waterAmount: number;
  protected name: string;
  protected minimumWater: number;
  public absorbWater: number;
  constructor(name: string, waterAmount: number = 0) {
    this.name = name;
    this.waterAmount = waterAmount;
  }

  public needsWater() {
    return this.waterAmount < this.minimumWater ? true : false;
  }

  public getInfo() {
    console.log(
      `The ${this.name} ${this.needsWater() ? `needs` : `doesnt need`} water`
    );
  }
  public water(waterAdd: number) {
    this.waterAmount += waterAdd * this.absorbWater;
  }
}

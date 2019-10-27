`use strict`;
import { StringedInstrument } from "./stringed-instrument";
class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super(`Electric Guitar`, numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }
  sound() {
    return `Twang`;
  }
}
export { ElectricGuitar };

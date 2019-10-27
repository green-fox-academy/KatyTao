`use strict`;
import { StringedInstrument } from "./stringed-instrument";
class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super(`Violin`, numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return `Screech`;
  }
}
export { Violin };

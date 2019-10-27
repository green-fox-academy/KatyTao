`use strict`;
import { StringedInstrument } from "./stringed-instrument";
class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super(`Bass Guitar`, numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return `Duum-duum-duum`;
  }
}
export { BassGuitar };

`use strict`;
import { Instrument } from "./model-stringed-instruments";
abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  constructor(name: string, numberOfStrings: number) {
    super(name);
  }
  public abstract sound(): string;
  public play(): void {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}`
    );
  }
}
export { StringedInstrument };

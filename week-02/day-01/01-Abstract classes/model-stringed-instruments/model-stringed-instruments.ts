`use strict`
abstract class Instrument {
  public name:string;
  abstract play():void;
}

abstract class StringedInstrument extends Instrument {
  protected numberOfStrings:number;
  abstract sound():string;
}

class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
  }
  sound() {
    return `Twang`;
  }
  play(): void {
    
    console.log(`Electric Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return `Duum-duum-duum`;
  }
  play(): void {
    console.log(`Bass Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}

class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return `Screech`;
  }
  play(): void {
    console.log(`Violin, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}
export{ElectricGuitar, BassGuitar, Violin};
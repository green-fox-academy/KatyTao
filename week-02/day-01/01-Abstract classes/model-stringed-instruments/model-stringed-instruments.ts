`use strict`;
abstract class Instrument {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  public abstract play(): void;
}

export { Instrument };

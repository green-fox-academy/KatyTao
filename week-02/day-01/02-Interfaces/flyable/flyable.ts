`use strict`;
import { Animal } from "../../01-Abstract classes/zoo/zoo";
interface Flyable {
  land(): string;
  fly(): string;
  takeOff(): string;
}

abstract class Vehicle {
  protected name: string;
  protected wheelsNumber: number;
  protected carryPassengerNumber: number;
}

class Helicopter extends Vehicle implements Flyable {
  constructor(
    name: string,
    wheelsNumber: number,
    carryPassengerNumber: number
  ) {
    super();
    this.name = name;
    this.wheelsNumber = wheelsNumber;
    this.carryPassengerNumber = carryPassengerNumber;
  }
  land() {
    return `${this.name} is landing with ${this.wheelsNumber}`;
  }
  fly() {
    return `${this.name} is flying, it can carry ${this.carryPassengerNumber} passengers`;
  }
  takeOff() {
    return `${this.name} is taking off`;
  }
}

class Bird extends Animal implements Flyable {
  constructor(name: string, age: number = 1, weights: number = 1) {
    super();
    this.name = name;
    this.age = age;
    this.weight = weights;
  }
  getName(): string {
    return this.name;
  }
  breed(): string {
    return `by laying eggs`;
  }
  getInfo(): string {
    return `it is ${this.age} years old and its weight is ${this.weight} kg`;
  }
  land(): string {
    return `${this.name} is landing on a tree`;
  }
  fly(): string {
    return `it is flying by using its wings to keep the balance`;
  }
  takeOff(): string {
    return `${this.name} is taking off beside the lake`;
  }
}

export { Helicopter, Bird };

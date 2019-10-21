class Animal {
  constructor(hunger = 50, thirst = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat() {
    return this.hunger--;
  }
  drink() {
    return this.thirst--;
  }
  play() {
    return this.hunger++, this.thirst++;
  }
}

const dog = new Animal();
dog.play();
console.log(dog);

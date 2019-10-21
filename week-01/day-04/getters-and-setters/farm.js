const Animal = require(`./Animal`);
class Farm {
  constructor(animalList, number = 0) {
    this.animalList = animalList;
    this.freeNum = number;
  }

  set FreeNum(number) {
    this.freeNum = number;
  }
  get FreeNum() {
    return this.freeNum;
  }
  breed() {
    if (this.freeNum > 0) {
      this.animalList.push(new Animal());
      this.freeNum--;
    }
  }
  slaughter() {
    let animalIndex = 0;
    let hunger = 100;
    this.animalList.forEach(function(item, index) {
      if (item.hunger < hunger) {
        animalIndex = index;
        hunger = item.hunger;
      }
    });
    this.animalList.splice(animalIndex, 1);
    this.freeNum++;
    return this.animalList;
  }
}

const farm = new Farm([
  new Animal(40, 50),
  new Animal(20, 50),
  new Animal(10, 50)
]);
console.log(farm.FreeNum);
farm.FreeNum = 1;
console.log(farm.FreeNum);
farm.slaughter();
console.log(farm.FreeNum);

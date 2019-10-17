'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');
const fleet = new Fleet();
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well

class FleetOfThings {
    constructor(thingPair){
        this.thingPair = thingPair;
        this.list = [];
        this.outPut = ``;
    }
    main() {
        const newFleet =new Fleet();
        newFleet.add(this.thingPair);
        this.list = newFleet.getThings();
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].completed) {
                this.outPut += `${i+1}.[x] ${this.list[i].name}\n`;
            } else{
                this.outPut += `${i+1}.[ ] ${this.list[i].name}\n`;
            }
        }
        this.print();
    }
    print() {
        console.log(this.outPut);
    }
}

const thingOne = new Thing(`Get milk`);
console.log(typeof thingOne);
const result = new FleetOfThings(thingOne);
result.main();
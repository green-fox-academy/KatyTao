"use strict";

const Thing = require("./thing");
const Fleet = require("./fleet");
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
  constructor() {
    this.main();
  }
  main() {
    this.fleet = new Fleet();
    this.fleet.add(new Thing("Get milk"));
    this.fleet.add(new Thing("Remove the obstacles"));
    this.fleet.add(new Thing("Stand up"));
    this.fleet.add(new Thing("Eat lunch"));
    this.fleet.getThings()[2].complete();
    this.fleet.getThings()[3].complete();
  }
  print() {
    this.fleet.getThings().forEach(function(things, index) {
      console.log(
        `${index + 1}. [${
          things.getCompleted() ? `x` : ` `
        }] ${things.getName()}`
      );
    });
  }
}

const fleetOfthings = new FleetOfThings();
fleetOfthings.main();
fleetOfthings.print();

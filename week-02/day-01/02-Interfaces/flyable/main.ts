`use strict`
import { Helicopter, Bird } from "./flyable";

console.log(`test1 begin`);
const heli1 = new Helicopter(`CH-47F Chinook USAF`,4, 5);
console.log(heli1.fly());
const parrot = new Bird(`Parrot`);
console.log(`It is a ${parrot.getName()} ${parrot.fly()} ${parrot.getInfo()}`);


`use strict`
import Reservationy from "./reservationy";
export class Reservation implements Reservationy {
  getDowBooking(): string {
    let Days = [`MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`];
    return Days[Math.floor(Math.random() * Days.length)];
  }
  getCodeBooking(): string {
    let randomStr = ``;
    let rangeStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i< 8; i++) {
      randomStr += rangeStr.charAt(Math.floor(Math.random()*rangeStr.length));
    }
    return randomStr; 
  }
}
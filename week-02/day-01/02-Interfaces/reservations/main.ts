`use strict`
import { Reservation } from "./reservation";
function getReservation(num: number) {
  const bookings = []
  for (let i = 0; i < num; i++) {
    bookings.push(new Reservation());
    console.log(`booking# ${bookings[i].getCodeBooking()} for ${bookings[i].getDowBooking()}`);
  }
}

getReservation(10);

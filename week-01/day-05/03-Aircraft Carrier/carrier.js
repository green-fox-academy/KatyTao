export default class Carrier {
  constructor(aircraftsList = [], initialAmmo, health) {
    this.aircraftsList = aircraftsList;
    this.initialAmmo = initialAmmo;
    this.health = health;
  }
  add(aircraft) {
    if (aircraft instanceof Aircrafts) {
      this.aircraftsList.push(aircraft);
    }
  }
  fill() {
    this.totalNeedsAmmo = this.aircraftsList.map(aircraft => {});
    this.aircraftsList.forEach(item => {
      this.initialAmmo += item.refill(item.maxAmmo);
    });
  }
}

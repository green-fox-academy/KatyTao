export default class Aircraft {
  constructor(type, maxAmmo, baseDamage, ammoStorage = 0) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammoStorage = ammoStorage;
  }
  flight() {
    this.damage = this.baseDamage * this.ammoStorage;
    this.ammoStorage = 0; //It should use all the ammo (set it to 0) and it should return the damage it deals
    return this.damage;
  }

  refill(number) {
    this.ammoStorage =
      this.ammoStorage + number > this.maxAmmo
        ? this.maxAmmo
        : this.ammoStorage + number;
    console.log(`test:ammoStorage ${this.ammoStorage} [line:15]`);
    this.remainAmmo =
      this.ammoStorage + number > this.maxAmmo ? number - this.ammoStorage : 0;
    return this.remainAmmo;
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.damage}`;
  }

  isPriority() {
    if (this.type === `F35`) {
      return true;
    } else if (this.type === `F16`) {
      return false;
    }
  }
}

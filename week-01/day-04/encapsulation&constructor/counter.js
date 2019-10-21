class Counter {
  constructor(number = 0) {
    this.number = number;
    this.initNum = number;
  }
  add(number = 1) {
    return (this.number += number);
  }
  get() {
    return toString(this.number);
  }
  reset() {
    return this.initNum;
  }
}

const counterOne = new Counter(3);

const Sharpie = require(`./sharpie`);
class SharpieSet {
  constructor(SharpieList) {
    this.SharpieList = SharpieList;
  }
  countUsable() {
    let count = 0;
    this.SharpieList.forEach(item => {
      if (item.inkAmount !== 0) {
        count++;
      }
    });
    return count;
  }
  removeTrash() {
    this.SharpieList.forEach(function(item, index, object) {
      if (item.inkAmount === 0) {
        object.splice(index, 1);
      }
    });
    return this.SharpieList;
  }
}

const SharpieOne = new Sharpie(`blue`, 0.5, 0);
const SharpieTwo = new Sharpie(`blue`, 0.5, 50);
const SharpieList = [];
SharpieList.push(SharpieOne);
SharpieList.push(SharpieTwo);

const SharpieTestSet = new SharpieSet(SharpieList);
console.log(SharpieTestSet.countUsable());
console.log(SharpieTestSet.removeTrash());

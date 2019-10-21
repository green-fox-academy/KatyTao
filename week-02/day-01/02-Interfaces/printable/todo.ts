import Printable from "./printable";

`use strict`;
class Todo implements Printable {
  mainItem: string;
  subItem: string[];
  constructor(mainItem: string, subItem: string[] = []) {
    this.mainItem = mainItem;
    this.subItem = subItem;
  }
  toSubString(): string {
    let subString = ``;
    if (this.subItem !== []) {
      this.subItem.forEach(item => {
        subString += ` -${item}\n`;
      });
    }
    return subString;
  }
  printAllFields(): void {
    console.log(`${this.mainItem}\n${this.toSubString()}`);
  }
}
export { Todo };

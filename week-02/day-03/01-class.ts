import Queue from "./01-queue";
import Stack from "./01-stack";

class newStack implements Stack {
  items: any;
  constructor(items: string[]) {
    this.items = [...items];
  }
  
  empty(): boolean {
    this.items.length = 0;
    if(this.items.length === 0) {
      return true;
    } else {
      return false;
    }
  }  
  
  peek(): string {
    return this.items[this.items.length - 1];
  }

  push(value: string): void {
    this.items.push(value);
  }

  pop(): string {
    if( this.items.length === 0 ) {
      return `The stack is underflow`;
    } else {
      return this.items.pop();
    }
  }
}

class newQueue implements Queue {
  items:string[];
  constructor(items:string[]) {
    this.items = [...items];
  }

  empty(): boolean {
    this.items.length = 0;
    if(this.items.length === 0) {
      return true;
    } else {
      return false;
    }
  }  
  
  peek(): string {
    return this.items[0];
  }
  
  add(value: string): void {
    this.items.push(value);
  }
  
  remove(): string {
    this.items.shift();
    return this.items[0];
  }
}

const arr = [`1`,`2`,`3`];
let testStack = new newStack(arr);
testStack.push(`1`);
testStack.push(`2`);
testStack.push(`3`);
console.log(testStack);
testStack.pop();
console.log(testStack);
testStack.empty();
console.log(testStack.empty());

let testQueue = new newQueue(arr);
console.log(testQueue);
console.log(testQueue.peek());

testQueue.add(`4`);
testQueue.add(`5`);
console.log(testQueue);
testQueue.remove();
console.log(testQueue);

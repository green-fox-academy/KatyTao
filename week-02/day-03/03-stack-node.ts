import MyNode from "./node";
import { Stack } from "./interface";
import { MyLink } from "./02-linkedList";

`use strict`

class StackNode implements Stack{
  value:string;
  head:MyNode;
  constructor() {
    this.head = new MyNode(null);
  }

  empty(): boolean {
    return this.head.next === undefined||this.head.next === null;
  }

  peek(): string { 
    let current:MyNode = this.head;
    let tail;
    while(current.next) {
      current = current.next;
      tail = current;
    }
    return tail.value;
  }

  push(value: string): void { //add a new node
    let i = 0;
    let previous = this.head;
    let current = this.head.next;
    const newNode = new MyNode(value);
    newNode.next = current;
    previous.next = newNode;
  }

  pop(): string { //remove an node from stack
    this.head.next = null;
    this.head = this.head.next;
    return this.head.value;
  }
}

let testNode = new StackNode();
console.log(testNode.empty());
testNode.push(`1`);
testNode.push(`2`);
console.log(testNode);
console.log(testNode.head.next);

console.log(testNode.empty());

console.log(testNode);



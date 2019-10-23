import MyNode from "./node";
import { Stack, TheNode } from "./interface";

`use strict`

class StackNode extends MyNode implements Stack{
  value:string;
  head:MyNode;
  constructor(value:string) {
    super(value);
    this.value = value;
    this.head = new MyNode(null);
  }

  empty(): boolean {
    return this.head.next === undefined;
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
    newNode.next = current.next;
    previous.next = newNode;
  }

  pop(): string { //remove an node from stack
    this.head.next = null;
    this.head = this.head.next;
    return this.head.value;
  }
}

let testNode = new StackNode(`1`);
testNode.push(`2`);
console.log(testNode);

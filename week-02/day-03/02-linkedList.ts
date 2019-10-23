`use strict`
import {LinkedList} from "./interface";
import MyNode from "./node";
class MyLink implements LinkedList{
  public item: string;
  public next: MyNode;
  public head: MyNode;
  public sizeNum: number;

  constructor() {
    this.head = null;
    this.sizeNum = 0;
  }

  public add(value: string, index?: number): void {
    let node = new MyNode(value);
    let currentNode;
    if(this.head === null) {     
      this.head = node;
    } else {
      currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.sizeNum +=1;
  }
    
  public get(index: number): any {
    let node = this.head;
    for(let i = 0; i < index; i++ ){
      node = node.next;
    }
    return node.value;
  }
  
  public removeItem(value: string): void {
    if (this.sizeNum < 1) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.sizeNum-=1;
    } else {
      let tempNode = this.head;
      while(tempNode.next) {
        if(tempNode.next.value === value) {
          if(tempNode.next.next) {
            tempNode.next = tempNode.next.next;
            this.sizeNum -=1;
          } else {
            tempNode.next = null;
            this.sizeNum -=1;
          }
        } else {
          tempNode = tempNode.next;
        }
      }
    }
  }

  public remove(index: number): string {
    let node = this.head;
    let current = node;
    if(index === 0) {
      this.head = node.next;
      return;
    } else {
      for(let i = 0; i<index; i++) {
        current = node;
        node = node.next;
      }
      current.next = node.next;
    }
    this.sizeNum-=1;
    return this.item;
  }

  public size(): number {
    return this.sizeNum;
  }
}

const testLink = new MyLink();
testLink.add(`1`);
testLink.add(`2`);
testLink.add(`3`);
console.log(testLink);
console.log(testLink.get(1));
testLink.removeItem(`1`);
console.log(testLink);
testLink.remove(1);
console.log(testLink);



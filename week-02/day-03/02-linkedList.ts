import {LinkedList} from "./interface";
import MyNode from "./node";
class myLink extends MyNode implements LinkedList{
  item: any;
  next: any;
  head: any = null;
  sizeNum:number = 0;

  constructor(item: any, next:any = null) {
    super(item, next);
    this.item = item;
    this.next = next;  
  }

  add(value: string, index?: number): void {
    let node = new myLink(value,'');
    if(this.head === null) {
      this.head = node;
    } else {
      if(!this.get(index)){
        let last =  this.get(this.sizeNum-1);
        last.next = node;
      }
    }
    this.sizeNum+=1;
  }
    
  
  get(index: number): any {
    let node = this.head;
    for(let i = 0; i < index; i++ ){
      node = node.next;
    }
    return node;
  }
  
  removeItem(value: string): void {
    if (this.sizeNum < 1) {
      return null;
    }
    
    if (this.head === value) {
      this.head = this.head.next;
      this.sizeNum-=1;
    } else {
      let tempNode = this.head;
      while(tempNode.next) {
        if(tempNode.next === value) {
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

  remove(index: number): string {
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

  size(): number {
    return this.sizeNum;
  }

}
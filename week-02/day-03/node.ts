export default class MyNode{
  public value: string;
  public next?: MyNode;
  constructor(value: string){
    this.value = value;
    this.next = null;
  }
}

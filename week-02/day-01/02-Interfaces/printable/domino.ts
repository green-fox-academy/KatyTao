`use strict`
import Printable from "./printable";
class Domino implements Printable {
    private values: number[];
    constructor(valueA:number, valueB:number){
      this.values = [valueA, valueB];
    }
      
    public toString() {
        return `[${this.values[0]}|${this.values[1]}]`;
      }
    public printAllFields(): void{
      console.log(this.values); 
    }
  }

  export {Domino};
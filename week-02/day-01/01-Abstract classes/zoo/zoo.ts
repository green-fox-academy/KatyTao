`use strict`
abstract class Animal {
    protected name:string;
    protected age:number;
    protected gender:string;
    protected height:number;
    protected weight:number;
    abstract getName():string;
    abstract breed():string;
    abstract getInfo():string;
}

class Reptile extends Animal {
    constructor(name:string, gender:string = `female`, age:number = 5, height:number = 50, weight:number = 50){
        super();
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getName(): string {
        return this.name;
    }    
    breed(): string {
        return `laying eggs`;
    }
    getInfo():string {
        return `it is ${this.age} years old, ${this.gender}, with ${this.height}cm height and ${this.weight}kg weight`;
    }   
}

class Mammal extends Animal {
    name:string;
    constructor(name:string){
        super();
        this.name = name;
    }
    getName(): string {
        return this.name;
    }    
    breed(): string {
        return `pushing miniature versions out`;
    }   
    getInfo():string {
        return `It is ${this.age} years old, ${this.gender}, with ${this.height}cm height and ${this.weight}kg weight`;
    }   
}

class Bird extends Animal {
    name:string;
    constructor(name:string){
        super();
        this.name = name;
    }
    getName(): string {
        return this.name;
    }    
    breed(): string {
        return `laying eggs`;
    }   
    getInfo():string {
        return `It is ${this.age} years old, ${this.gender}, with ${this.height}cm height and ${this.weight}kg weight`;
    }   
}

export{Reptile, Mammal, Bird};
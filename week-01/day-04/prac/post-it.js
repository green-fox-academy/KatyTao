`use strict`;
class PostIt {
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

const textOne = new PostIt(`Oragne`, `Idea 1`, `blue`);
const textTwo = new PostIt(`Pink`, `Awesome`, `black`);
const textThree = new PostIt(`Green`, `Superb!`, `yellow`);

console.log(textOne);
console.log(textTwo);
console.log(textThree);

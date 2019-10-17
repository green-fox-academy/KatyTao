`use strict`
class PostIt {
    constructor(backgroundColor, text, textColor) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

const textOne = new PostIt();
textOne.backgroundColor = `Orange`;
textOne.text = `Idea 1`;
textOne.textColor = `blue`;

const textTwo = new PostIt();
textTwo.backgroundColor = `pink`;
textTwo.text = `Awesome`;
textTwo.textColor = `black`;

const textThree = new PostIt();
textThree.backgroundColor = `green`;
textThree.text = `Superb!`;
textThree.textColor = `yellow`;

console.log(textOne);
console.log(textTwo);
console.log(textThree);






"use strict";

const Domino = require("./domino");

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
console.log(dominoes.toString());

let tempObj = {};
let tempNum = 0;
for (let i = 0; i < dominoes.length; i++) {
  tempNum = dominoes[i].values[1];
  for (let j = i; j < dominoes.length; j++) {
    if (dominoes[j].values[0] === tempNum) {
      tempObj = dominoes[j];
      dominoes[j] = dominoes[i + 1];
      dominoes[i + 1] = tempObj;
    }
  }
}
console.log(dominoes.toString());

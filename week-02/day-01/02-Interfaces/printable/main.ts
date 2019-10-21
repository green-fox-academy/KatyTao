`use strict`;
import { Domino } from "./domino";
import { Todo } from "./todo";

const dominoes = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));
const todos = [];
todos.push(new Todo(`Notes`, [`subnotes`]));
todos.push(new Todo(`Water`, [`coke`]));

for (let domino of dominoes) {
  domino.printAllFields();
}
for (let todo of todos) {
  todo.printAllFields();
}

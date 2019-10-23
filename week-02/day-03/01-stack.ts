`use strict`

export default interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string):void;
  pop(): string;
};
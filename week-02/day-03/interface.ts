`use strict`

export interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string):void;
  pop(): string;
};

export interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

export interface LinkedList {
  add(value: string, index?: number): void;
  get(index: number): any;
  removeItem(value: string): void;
  remove(index: number): string;
  size(): number;
}

export interface Tree {
  empty(): boolean;
  add(value: string): void;
  remove(value: string): void;
  search(value: string): boolean
}
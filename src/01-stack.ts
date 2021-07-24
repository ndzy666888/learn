import { errLog } from './utils';

export default class Stack<T> {
  count: number;

  items: { [p: number]: T };

  constructor() {
    this.count = 0;
    this.items = {};
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  push(ele: T) {
    this.items[this.count] = ele;
    this.count += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return errLog(['pop', '栈为空'], -1);
    }

    this.count -= 1;
    const res = this.items[this.count];
    delete this.items[this.count];

    return res;
  }

  peek() {
    if (this.isEmpty()) {
      return errLog(['peek', '栈为空'], -1);
    }

    return this.items[this.count - 1];
  }

  toString() {
    if (this.isEmpty()) {
      return errLog(['toString', '栈为空'], -1);
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i += 1) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

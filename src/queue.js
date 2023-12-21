const { NotImplementedError } = require('../extensions/index.js');

function ListNode(x) {
  this.value = x;
  this.next = null;
}

module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

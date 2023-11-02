//node definition
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MyHashSet {
  constructor() {
    this.size = 1000;
    this.set = new Array(this.size).fill(null);
  }

  hash(key) {
    return key % this.size;
  }

  add(key) {
    let idx = this.hash(key);

    if (this.set[idx] === null) {
      this.set[idx] = new Node(key);
      return;
    }
    let currentNode = this.set[idx];
    while (currentNode) {
      if (currentNode.value === key) return;
      if (currentNode.next === null) break;
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(key);
  }

  remove(key) {
    let idx = this.hash(key);
    let currentNode = this.set[idx];

    if (currentNode === null) return;
    if (currentNode.value === key) {
      this.set[idx] = currentNode.next;
      return;
    }

    while (currentNode.next) {
      if (currentNode.next.value === key) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  contains(key) {
    let idx = this.hash(key);
    let currentNode = this.set[idx];

    if (!currentNode) return false;

    while (currentNode) {
      if (currentNode.value === key) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
}

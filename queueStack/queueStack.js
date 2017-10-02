class Stack {
  constructor() {
    this.storage = []
    this.length = 0
  }

  push(val) {
    this.storage[this.length] = val
    this.length++
  }

  pop() {
    let temp = this.storage[this.length - 1]
    this.storage.slice(0, this.length - 1)
    this.length--
    return temp
  }

  size() {
    return this.length
  }
}

class Queue {
  constructor() {
    this.inbox = new Stack()
    this.outbox = new Stack()
  }

  enqueue(val) {
    while(this.outbox.size()) {
      this.inbox.push(this.outbox.pop())
    }
    this.inbox.push(val)
  }

  dequeue() {
    while(this.inbox.size()) {
      this.outbox.push(this.inbox.pop())
    }
    return this.outbox.pop()
  }

  size() {
    return this.inbox.size() + this.outbox.size()
  }
}

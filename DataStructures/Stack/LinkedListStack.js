const LinkedList = require('../LinkedList/LinkedList')

/**
 * @name LinkedListStack 栈 -> 使用链表来实现栈
 */
class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
  }

  // 入栈 O(1)
  push(val) {
    this.list.addFirst(val)
  }

  // 出栈，返回出栈的元素 O(1)
  pop() {
    return this.list.removeFirst()
  }

  // 获取栈顶的元素 O(1)
  peek() {
    return this.list.getFirst()
  }

  // 获取栈的元素的数量 O(1)
  getSize() {
    return this.list.getSize()
  }

  // 查询栈是否为空 O(1)
  isEmpty() {
    return this.list.isEmpty()
  }

  // 打印栈
  print() {
    let str = 'Stack: top '
    str += this.list.print()
    return str
  }
}

module.exports = LinkedListStack

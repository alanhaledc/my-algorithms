class LinkedListNode<T> {
  val: T;
  next?: LinkedListNode<T>;

  constructor(val: T, next?: LinkedListNode<T>) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @name LinkedList 链表 -> 单向链表
 * @description
 * 特性①：每个节点由一个存储元素本身值的元素和一个指向下一个元素的引用（也称指针或链接）组成。
 * 特性②：单项链表是最简单，也是最基础的链表。
 * 应用①：链表相对于数组，在添加或移除元素的时候不需要移动其他节点，而是修改节点的指向。
 * 应用②：相对于数组，不能直接通过索引访问任何一个元素，需要从表头开始一个个去查找。
 */
export default class LinkedList<T> {
  head: LinkedListNode<T> | undefined;
  protected count: number;

  constructor() {
    this.count = 0;
  }

  // 获取链表中值的数量 O(1)
  get size(): number {
    return this.count;
  }

  // 返回链表是否为空 O(1)
  isEmpty(): boolean {
    return this.size === 0;
  }

  // 在链表的 index 位置添加值 O(N)
  protected add(index: number, val: T): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new LinkedListNode(val);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.get(index - 1);
        if (previous) {
          node.next = previous.next;
          previous.next = node;
        }
      }
      this.count++;
      return true;
    }
    return false;
  }

  // 在表头添加值 O(1)
  addFirst(val: T): boolean {
    return this.add(0, val);
  }

  // 在表尾添加值 O(N)
  addLast(val: T): boolean {
    return this.add(this.count, val);
  }

  // 获取链表第 index 个位置的节点 O(N)
  protected get(index: number): LinkedListNode<T> | undefined {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  // 获取链表的第一个值 O(1)
  getFirst(): T | undefined {
    return this.get(0)?.val;
  }

  // 获取链表的最后一个值 O(N)
  getLast(): T | undefined {
    return this.get(this.count - 1)?.val;
  }

  // 设置链表第 index 个位置的值 O(N)
  set(index: number, val: T): boolean {
    if (index >= 0 && index < this.count) {
      const node = this.get(index);
      if (node) {
        node.val = val;
        return true;
      }
    }
    return false;
  }

  // 查找元素 val 的索引 O(N)
  indexOf(val: T): number {
    let current = this.head;

    for (let i = 0; i < this.size && current; i++) {
      if (current.val === val) {
        return i;
      }
      current = current.next;
    }

    return -1;
  }

  // 查找链表中是否有某个值 O(N)
  contains(val: T): boolean {
    let current = this.head;

    while (current) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // 删除链表第 index 个位置的值，返回删除的元素 O(N)
  protected remove(index: number): T | undefined {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (!current) return undefined;

      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.get(index - 1);
        if (previous) {
          current = previous.next;
          previous.next = current?.next;
        }
      }
      this.count--;
      return current?.val;
    }
    return undefined;
  }

  // 删除链表的第一个值 O(1)
  removeFirst(): T | undefined {
    return this.remove(0);
  }

  // 删除链表的最后一个值 O(N)
  removeLast(): T | undefined {
    return this.remove(this.count - 1);
  }

  // 从链表中删除某个元素 val 只删除前面的第一个值 O(N)
  // 也可以使用查找元素的索引，然后根据索引删除
  removeKey(val: T): boolean {
    let current = this.head;
    let delNode: LinkedListNode<T> | undefined;

    if (!current) return false;

    if (current.val === val) {
      delNode = current;
      this.head = delNode.next;
    } else {
      while (current.next) {
        if (current.next.val === val) {
          delNode = current.next;
          const previous = current;
          previous.next = current.next.next;
          break;
        }
        current = current.next;
      }
    }

    if (!delNode?.val) {
      return false;
    } else {
      this.count--;
      return true;
    }
  }

  // 清空链表 O(1)
  clear(): void {
    this.head = undefined;
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) return "";

    let current = this.head;
    let str = "Linked List { ";

    // 遍历节点
    while (current) {
      str += current.val + " -> ";
      current = current.next;
    }

    str += "undefined }";
    return str;
  }
}

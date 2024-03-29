/**
 * @name SegmentTree 线段树（区间树）
 * @description 线段树主要解决涉及区间（线段）的问题，比如某个区间的查询、更新
 * 特性①：线段树不是完全二叉树，它是平衡二叉树
 * 特性②：线段树实现，有两个数据库，一个是普通的数组结构，一个是转换成树结构
 */
export default class SegmentTree<T> {
  array: T[];
  tree: T[];
  merge: (a: T, b: T) => T;

  constructor(arr: T[] = [], merge: (a: T, b: T) => T) {
    this.array = [...arr]; // 数组数据
    this.tree = []; // 线段树数据
    this.merge = merge; // 融合函数 -> 可以是求区间值的和、求最大值、求最小值
    this.buildSegmentTree(0, 0, this.size - 1);
  }

  get size(): number {
    return this.array.length;
  }

  // 在 treeIndex 的位置创建表示区间 [start...end] 的线段树
  private buildSegmentTree(
    treeIndex: number,
    start: number,
    end: number
  ): void {
    if (start === end) {
      this.tree[treeIndex] = this.array[start];
      return;
    }

    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);

    const mid = Math.floor(start + (end - start) / 2);

    this.buildSegmentTree(leftTreeIndex, start, mid); // 递归创建左边的子节点线段树
    this.buildSegmentTree(rightTreeIndex, mid + 1, end); // 递归创建右边的子节点线段树

    // 融合左右两边的线段树
    this.tree[treeIndex] = this.merge(
      this.tree[leftTreeIndex],
      this.tree[rightTreeIndex]
    );
  }

  get(index: number) {
    if (index >= 0 && index < this.size) {
      return this.array[index];
    }
  }

  // 获取左孩子节点索引
  private leftChild(index: number) {
    return index * 2 + 1;
  }

  // 获取右孩子节点索引
  private rightChild(index: number) {
    return index * 2 + 2;
  }

  // 搜索区间 [queryL, queryR] 的值
  query(queryL: number, queryR: number) {
    if (
      queryL < 0 ||
      queryL >= this.size ||
      queryR < 0 ||
      queryR >= this.size ||
      queryL > queryR
    ) {
      throw new Error("Index is Illegal.");
    }
    return this.queryValue(0, 0, this.size - 1, queryL, queryR);
  }

  // 在以 treeIndex 为根的线段树中 [start...end] 的范围里，搜索区间 [queryL...queryR] 的值
  private queryValue(
    treeIndex: number,
    start: number,
    end: number,
    queryL: number,
    queryR: number
  ): T {
    if (queryL === start && queryR === end) {
      return this.tree[treeIndex];
    }

    const mid = Math.floor(start + (end - start) / 2);
    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);

    if (queryL >= mid + 1) {
      return this.queryValue(rightTreeIndex, mid + 1, end, queryL, queryR);
    } else if (queryR <= mid) {
      return this.queryValue(leftTreeIndex, start, mid, queryL, queryR);
    }

    const leftResult: T = this.queryValue(leftTreeIndex, start, mid, queryL, mid);
    const rightResult: T = this.queryValue(
      rightTreeIndex,
      mid + 1,
      end,
      mid + 1,
      queryR
    );

    return this.merge(leftResult, rightResult);
  }

  // 将 index 位置的值，设置为 val
  set(index: number, val: T) {
    if (index >= 0 && index < this.size) {
      this.array[index] = val;
      this.setValue(0, 0, this.size - 1, index, val);
    }
  }

  // 在以 treeIndex 为根的线段树中设置 index 的值为 val
  private setValue(
    treeIndex: number,
    start: number,
    end: number,
    index: number,
    val: T
  ) {
    if (start === end) {
      this.tree[treeIndex] = val;
      return;
    }

    const mid = Math.floor(start + (end - start) / 2);
    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);

    if (index >= mid + 1) {
      this.setValue(rightTreeIndex, mid + 1, end, index, val);
    } else {
      this.setValue(leftTreeIndex, start, mid, index, val);
    }

    this.tree[treeIndex] = this.merge(
      this.tree[leftTreeIndex],
      this.tree[rightTreeIndex]
    );
  }
}

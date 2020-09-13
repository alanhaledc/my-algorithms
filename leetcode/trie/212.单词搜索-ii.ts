/*
 * @lc app=leetcode.cn id=212 lang=typescript
 *
 * [212] 单词搜索 II
 */

export {};

// @lc code=start
// leetcode 208
class TrieNode {
  isWord: boolean;
  next: Map<string, TrieNode>;

  constructor(isWord = false) {
    this.isWord = isWord;
    this.next = new Map();
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let cur = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!cur.next.get(c)) {
        cur.next.set(c, new TrieNode());
      }
      cur = cur.next.get(c)!;
    }

    if (!cur.isWord) {
      cur.isWord = true;
    }
  }

  search(word: string): boolean {
    let cur = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!cur.next.get(c)) {
        return false;
      }
      cur = cur.next.get(c)!;
    }
    return cur.isWord;
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix[i];
      if (!cur.next.get(c)) {
        return false;
      }
      cur = cur.next.get(c)!;
    }
    return true;
  }
}

// trie + backtracking
var findWords = function (board: string[][], words: string[]): string[] {
  let n = board.length;
  if (n === 0) return [];
  let m = board[0].length;
  const wordsTrie = new Trie();
  for (const word of words) {
    wordsTrie.insert(word);
  }
  let ret: string[] = [];

  const direction = [
    [0, -1], // 上
    [0, 1], // 下
    [-1, 0], // 左
    [1, 0], // 右
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dfs(i, j, "");
    }
  }

  return ret;

  function dfs(i: number, j: number, curStr: string) {
    const str = board[i][j];
    curStr += str;
    if (wordsTrie.search(curStr) && !ret.includes(curStr)) {
      ret.push(curStr);
    }
    if (!wordsTrie.startsWith(curStr)) return;
    board[i][j] = "#";
    for (let k = 0; k < direction.length; k++) {
      let newX = i + direction[k][0];
      let newY = j + direction[k][1];
      if (inArea(newX, newY) && board[newX][newY] !== "#") {
        dfs(newX, newY, curStr);
      }
    }
    board[i][j] = str;
  }

  function inArea(x: number, y: number) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }
};
// @lc code=end

// backtracking -> transform leetcode 79
var findWords = function (board: string[][], words: string[]): string[] {
  let n = board.length;
  if (n === 0) return [];
  let m = board[0].length;
  let marked: boolean[][] = Array.from(new Array(n), () =>
    new Array(m).fill(false)
  );
  const ret: string[] = [];

  const direction = [
    [0, -1], // 上
    [0, 1], // 下
    [-1, 0], // 左
    [1, 0], // 右
  ];

  for (const word of words) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === word[0]) {
          if (dfs(i, j, 0, word)) {
            if (!ret.includes(word)) ret.push(word);
          }
        }
      }
    }
    // reset marked
    marked = Array.from(new Array(n), () => new Array(m).fill(false));
  }

  return ret;

  function dfs(i: number, j: number, start: number, word: string) {
    if (start === word.length - 1) {
      return board[i][j] === word[start];
    }

    if (board[i][j] === word[start]) {
      marked[i][j] = true;
      for (let k = 0; k < direction.length; k++) {
        let newX = i + direction[k][0];
        let newY = j + direction[k][1];
        if (inArea(newX, newY) && !marked[newX][newY]) {
          if (dfs(newX, newY, start + 1, word)) {
            return true;
          }
        }
      }
      marked[i][j] = false;
    }
    return false;
  }

  function inArea(x: number, y: number) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }
};

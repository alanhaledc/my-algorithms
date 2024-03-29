/*
 * @lc app=leetcode.cn id=820 lang=typescript
 *
 * [820] 单词的压缩编码
 *
 * https://leetcode.cn/problems/short-encoding-of-words/description/
 *
 * algorithms
 * Medium (51.78%)
 * Likes:    294
 * Dislikes: 0
 * Total Accepted:    66.1K
 * Total Submissions: 127.7K
 * Testcase Example:  '["time","me","bell"]'
 *
 * 单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：
 *
 *
 * words.length == indices.length
 * 助记字符串 s 以 '#' 字符结尾
 * 对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与
 * words[i] 相等
 *
 *
 * 给你一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：words = ["time", "me", "bell"]
 * 输出：10
 * 解释：一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
 * words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示
 * "time#bell#"
 * words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
 * words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示
 * "time#bell#"
 *
 *
 * 示例 2：
 *
 *
 * 输入：words = ["t"]
 * 输出：2
 * 解释：一组有效编码为 s = "t#" 和 indices = [0] 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * words[i] 仅由小写字母组成
 *
 *
 */

export {};

// @lc code=start
var minimumLengthEncoding = function (words: string[]): number {
  const good: Set<string> = new Set(words);
  for (const word of words) {
    for (let i = 1; i < word.length; i++) {
      good.delete(word.substring(i));
    }
  }
  let res = 0;
  for (const word of good) {
    res += word.length + 1;
  }
  return res;
};

class TrieNode {
  count: number;
  next: Map<string, TrieNode>;

  constructor() {
    this.count = 0;
    this.next = new Map();
  }

  get(ch: string): TrieNode {
    if (!this.next.has(ch)) {
      this.next.set(ch, new TrieNode());
      this.count++;
    }
    return this.next.get(ch)!;
  }
}

var minimumLengthEncoding = function (words: string[]): number {
  const trie = new TrieNode();
  const nodes: Map<TrieNode, number> = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let cur = trie;
    for (let j = word.length - 1; j >= 0; j--) {
      cur = cur.get(word[j]);
    }
    nodes.set(cur, i);
  }

  let res = 0;
  for (const node of nodes.keys()) {
    if (node.count === 0) {
      res += words[nodes.get(node)!].length + 1;
    }
  }
  return res;
};
// @lc code=end

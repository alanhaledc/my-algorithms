/*
 * @lc app=leetcode.cn id=921 lang=typescript
 *
 * [921] 使括号有效的最少添加
 *
 * https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/description/
 *
 * algorithms
 * Medium (74.58%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    39K
 * Total Submissions: 52.3K
 * Testcase Example:  '"())"'
 *
 * 只有满足下面几点之一，括号字符串才是有效的：
 *
 *
 * 它是一个空字符串，或者
 * 它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
 * 它可以被写作 (A)，其中 A 是有效字符串。
 *
 *
 * 给定一个括号字符串 s ，移动N次，你就可以在字符串的任何位置插入一个括号。
 *
 *
 * 例如，如果 s = "()))" ，你可以插入一个开始括号为 "(()))" 或结束括号为 "())))" 。
 *
 *
 * 返回 为使结果字符串 s 有效而必须添加的最少括号数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "())"
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "((("
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 只包含 '(' 和 ')' 字符。
 *
 *
 */

// @lc code=start
// stack
var minAddToMakeValid = function (s: string): number {
  let rights = 0;
  const stack: string[] = [];
  for (const ch of s) {
    if (ch === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        rights++;
      }
    } else {
      stack.push(ch);
    }
  }
  return stack.length + rights;
};

// greedy
var minAddToMakeValid = function (s: string): number {
  let res = 0;
  let lefts = 0;
  for (const ch of s) {
    if (ch === "(") {
      lefts++;
    } else {
      if (lefts > 0) {
        lefts--;
      } else {
        res++;
      }
    }
  }
  res += lefts;
  return res;
};
// @lc code=end

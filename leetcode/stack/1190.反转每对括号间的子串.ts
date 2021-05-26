/*
 * @lc app=leetcode.cn id=1190 lang=typescript
 *
 * [1190] 反转每对括号间的子串
 *
 * https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/
 *
 * algorithms
 * Medium (61.99%)
 * Likes:    104
 * Dislikes: 0
 * Total Accepted:    17.1K
 * Total Submissions: 27.6K
 * Testcase Example:  '"(abcd)"'
 *
 * 给出一个字符串 s（仅含有小写英文字母和括号）。
 *
 * 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
 *
 * 注意，您的结果中 不应 包含任何括号。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "(abcd)"
 * 输出："dcba"
 *
 *
 * 示例 2：
 *
 * 输入：s = "(u(love)i)"
 * 输出："iloveu"
 *
 *
 * 示例 3：
 *
 * 输入：s = "(ed(et(oc))el)"
 * 输出："leetcode"
 *
 *
 * 示例 4：
 *
 * 输入：s = "a(bcdefghijkl(mno)p)q"
 * 输出："apmnolkjihgfedcbq"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 2000
 * s 中只有小写英文字母和括号
 * 我们确保所有括号都是成对出现的
 *
 *
 */

export {};

// @lc code=start
// stack
var reverseParentheses = function (s: string): string {
  const stack: string[] = [];
  let str = "";

  for (const ch of s) {
    if (ch === "(") {
      stack.push(str);
      str = "";
    } else if (ch === ")") {
      str = str.split("").reverse().join("");
      str = stack.pop() + str;
    } else {
      str += ch;
    }
  }

  return str;
};

// stack 2
var reverseParentheses = function (s: string): string {
  const n = s.length;
  const pair: number[] = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      const j = stack.pop()!;
      pair[i] = j;
      pair[j] = i;
    }
  }

  const strArr: string[] = [];
  let index = 0;
  let step = 1;
  while (index < n) {
    if (s[index] === "(" || s[index] === ")") {
      index = pair[index];
      step = -step;
    } else {
      strArr.push(s[index]);
    }
    index += step;
  }

  return strArr.join("");
};
// @lc code=end

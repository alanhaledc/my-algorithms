/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/description/
 *
 * algorithms
 * Medium (19.10%)
 * Likes:    163
 * Dislikes: 0
 * Total Accepted:    65.1K
 * Total Submissions: 155.3K
 * Testcase Example:  '"the sky is blue"'
 *
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 *
 *
 *
 * 示例 1：
 *
 * 输入: "the sky is blue"
 * 输出: "blue is sky the"
 *
 *
 * 示例 2：
 *
 * 输入: "  hello world!  "
 * 输出: "world! hello"
 * 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 *
 *
 * 示例 3：
 *
 * 输入: "a good   example"
 * 输出: "example good a"
 * 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 *
 *
 *
 *
 * 说明：
 *
 *
 * 无空格字符构成一个单词。
 * 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 *
 *
 *
 *
 * 进阶：
 *
 * 请选用 C 语言的用户尝试使用 O(1) 额外空间复杂度的原地解法。
 *
 */

// @lc code=start
// API
var reverseWords = function (s: string): string {
  return s.split(" ").filter(Boolean).reverse().join(" ");
};

var reverseWords = function (s: string): string {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// two pointers + 双端队列
var reverseWords = function (s: string): string {
  let left = 0;
  let right = s.length - 1;

  // 首尾去空白字符
  while (left <= right && s[left] === " ") left++;
  while (left <= right && s[right] === " ") right--;

  const deque: string[] = [];
  let word = "";

  while (left <= right) {
    const c = s[left];
    if (c === " " && word) {
      deque.unshift(word);
      word = "";
    } else if (c !== " ") {
      word += c;
    }
    left++;
  }

  deque.unshift(word);
  return deque.join(" ");
};
// @lc code=end

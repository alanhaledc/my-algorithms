/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (37.46%)
 * Likes:    409
 * Dislikes: 0
 * Total Accepted:    150.8K
 * Total Submissions: 380.3K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */

// @lc code=start
// enumerate
var strStr = function (haystack: string, needle: string) {
  const n1 = haystack.length;
  const n2 = needle.length;

  for (let i = 0; i < n1 - n2 + 1; i++) {
    if (haystack.slice(i, i + n2) === needle) {
      return i;
    }
  }

  return -1;
};
// @lc code=end

// two pointers
var strStr = function (haystack: string, needle: string) {
  const n1 = haystack.length;
  const n2 = needle.length;
  if (n2 === 0) {
    return 0;
  }

  let p1 = 0;
  while (p1 < n1 - n2 + 1) {
    while (p1 < n1 - n2 + 1 && haystack[p1] !== needle[0]) {
      p1++;
    }
    let curLength = 0;
    let p2 = 0;
    while (p2 < n2 && p1 < n1 && haystack[p1] === needle[p2]) {
      p1++;
      p2++;
      curLength++;
    }
    if (curLength === n2) {
      return p1 - n2;
    }
    p1 = p1 - curLength + 1;
  }

  return -1;
};

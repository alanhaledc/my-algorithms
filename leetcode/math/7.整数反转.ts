/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.28%)
 * Total Accepted:    76.8K
 * Total Submissions: 245.4K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *
 */

// @lc code=start
// API
var reverse = function (x: number): number {
  // 数值转字符串后再翻转
  const str = new Number(x).toString().split("").reverse().join("");

  let ret = parseInt(str, 10);
  ret = x > 0 ? ret : -ret;
  return ret > 2 ** 31 - 1 || ret < -(2 ** 31) ? 0 : ret;
};

// math
var reverse = function (x: number): number {
  let ret = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    ret = ret * 10 + digit;
    if (ret > 2 ** 31 - 1 || ret < -(2 ** 31)) {
      return 0;
    }
  }

  return ret;
};
// @lc code=end

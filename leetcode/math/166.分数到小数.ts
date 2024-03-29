/*
 * @lc app=leetcode.cn id=166 lang=typescript
 *
 * [166] 分数到小数
 *
 * https://leetcode-cn.com/problems/fraction-to-recurring-decimal/description/
 *
 * algorithms
 * Medium (29.90%)
 * Likes:    278
 * Dislikes: 0
 * Total Accepted:    30.3K
 * Total Submissions: 98.1K
 * Testcase Example:  '1\n2'
 *
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。
 *
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 *
 * 如果存在多个答案，只需返回 任意一个 。
 *
 * 对于所有给定的输入，保证 答案字符串的长度小于 10^4 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：numerator = 1, denominator = 2
 * 输出："0.5"
 *
 *
 * 示例 2：
 *
 *
 * 输入：numerator = 2, denominator = 1
 * 输出："2"
 *
 *
 * 示例 3：
 *
 *
 * 输入：numerator = 2, denominator = 3
 * 输出："0.(6)"
 *
 *
 * 示例 4：
 *
 *
 * 输入：numerator = 4, denominator = 333
 * 输出："0.(012)"
 *
 *
 * 示例 5：
 *
 *
 * 输入：numerator = 1, denominator = 5
 * 输出："0.2"
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31
 * denominator != 0
 *
 *
 */

// @lc code=start
// math
function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator % denominator == 0) {
    return "" + Math.floor(numerator / denominator);
  }

  const sb = [];
  if (numerator < 0 !== denominator < 0) {
    sb.push("-");
  }

  // 整数部分
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const integerPart = Math.floor(numerator / denominator);
  sb.push(integerPart);
  sb.push(".");

  // 小数部分
  const fractionPart: (string | number)[] = [];
  const remainderIndexDic = new Map();
  let remainder = numerator % denominator;
  let index = 0;
  while (remainder !== 0 && !remainderIndexDic.has(remainder)) {
    remainderIndexDic.set(remainder, index);
    remainder *= 10;
    fractionPart.push(Math.floor(remainder / denominator));
    remainder %= denominator;
    index++;
  }
  if (remainder !== 0) {
    // 有循环节
    const insertIndex = remainderIndexDic.get(remainder);
    fractionPart.splice(insertIndex, 0, "(");
    fractionPart.push(")");
  }
  sb.push(fractionPart.join(""));

  return sb.join("");
}
// @lc code=end

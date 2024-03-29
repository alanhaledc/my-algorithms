/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 *
 * https://leetcode-cn.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Medium (59.39%)
 * Likes:    467
 * Dislikes: 0
 * Total Accepted:    60.8K
 * Total Submissions: 102.5K
 * Testcase Example:  '1\n2'
 *
 * 给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：a = 1, b = 2
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：a = 2, b = 3
 * 输出：5
 *
 *
 *
 *
 * 提示：
 *
 *
 * -1000 <= a, b <= 1000
 *
 *
 */

// @lc code=start
function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}
// @lc code=end

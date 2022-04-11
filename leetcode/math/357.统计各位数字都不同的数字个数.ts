/*
 * @lc app=leetcode.cn id=357 lang=typescript
 *
 * [357] 统计各位数字都不同的数字个数
 *
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (54.92%)
 * Likes:    209
 * Dislikes: 0
 * Total Accepted:    34.2K
 * Total Submissions: 62.5K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10^n^ 。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：91
 * 解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 0
 * 输出：1
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 8
 *
 *
 */

// @lc code=start
// dp
var countNumbersWithUniqueDigits = function (n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 10;

  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 10;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 1] - dp[i - 2]) * (10 - i + 1);
  }
  return dp[n];
};

var countNumbersWithUniqueDigits = function (n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 10;
  let res = 10;
  let pre = 9;
  for (let i = 2; i <= n; i++) {
    pre *= 10 - i + 1;
    res += pre;
  }
  return res;
};
// @lc code=end

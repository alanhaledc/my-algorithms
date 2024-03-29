/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (34.22%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    112.8K
 * Total Submissions: 299.9K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 *
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 *
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 *
 * 示例 1:
 *
 * 输入: 4
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842...,
 * 由于返回类型是整数，小数部分将被舍去。
 *
 *
 */

// @lc code=start
var mySqrt = function (x: number): number {
  let right = 0;
  while (!(right * right <= x && (right + 1) * (right + 1) > x)) {
    right++;
  }
  return right;
};

// binary search
var mySqrt = function (x: number): number {
  if (x === 0 || x === 1) return x;
  let left = 0;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const target = Math.floor(x / mid);
    if (mid === target) {
      return mid;
    } else if (mid < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
// @lc code=end

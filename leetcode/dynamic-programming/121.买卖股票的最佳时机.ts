/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (47.63%)
 * Likes:    930
 * Dislikes: 0
 * Total Accepted:    192.9K
 * Total Submissions: 357.7K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 *
 * 注意：你不能在买入股票前卖出股票。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 *
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 */

export {};

// @lc code=start

// dp
var maxProfit = function (prices: number[]): number {
  const n = prices.length;
  if (n === 0) return 0;

  // dp[i][j] -> i 股票交易天数 j 股票允许的交易最大数
  const dp: number[][] = Array.from(new Array(n), () => new Array(2).fill(0));

  for (let i = 0; i < n; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return dp[n - 1][0];
};

// dp2 optimization
var maxProfit = function (prices: number[]): number {
  const n = prices.length;
  let dpI0 = 0;
  let dpI1 = -Infinity;

  for (let i = 0; i < n; i++) {
    dpI0 = Math.max(dpI0, dpI1 + prices[i]);
    dpI1 = Math.max(dpI1, -prices[i]);
  }

  return dpI0;
};

// 暴力
// two traverse
var maxProfit = function (prices: number[]): number {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      max = Math.max(max, profit);
    }
  }

  return max;
};

// one traverse
var maxProfit = function (prices: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }

  return max;
};
// @lc code=end

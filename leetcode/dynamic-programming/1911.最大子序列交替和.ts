/*
 * @lc app=leetcode.cn id=1911 lang=typescript
 *
 * [1911] 最大子序列交替和
 *
 * https://leetcode.cn/problems/maximum-alternating-subsequence-sum/description/
 *
 * algorithms
 * Medium (59.22%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    11.4K
 * Total Submissions: 17.6K
 * Testcase Example:  '[4,2,5,3]'
 *
 * 一个下标从 0 开始的数组的 交替和 定义为 偶数 下标处元素之 和 减去 奇数 下标处元素之 和 。
 *
 *
 * 比方说，数组 [4,2,5,3] 的交替和为 (4 + 5) - (2 + 3) = 4 。
 *
 *
 * 给你一个数组 nums ，请你返回 nums 中任意子序列的 最大交替和 （子序列的下标 重新 从 0 开始编号）。
 *
 *
 *
 *
 * 一个数组的 子序列 是从原数组中删除一些元素后（也可能一个也不删除）剩余元素不改变顺序组成的数组。比方说，[2,7,4] 是
 * [4,2,3,7,2,1,4] 的一个子序列（加粗元素），但是 [2,4,2] 不是。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [4,2,5,3]
 * 输出：7
 * 解释：最优子序列为 [4,2,5] ，交替和为 (4 + 5) - 2 = 7 。
 *
 *
 * 示例 2：
 *
 * 输入：nums = [5,6,7,8]
 * 输出：8
 * 解释：最优子序列为 [8] ，交替和为 8 。
 *
 *
 * 示例 3：
 *
 * 输入：nums = [6,2,1,2,4,5]
 * 输出：10
 * 解释：最优子序列为 [6,1,5] ，交替和为 (6 + 5) - 1 = 10 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
var maxAlternatingSum = function (nums: number[]): number {
  const n = nums.length;
  // dp[i][0] 和 dp[i][1] 分别在 nums 的前缀 nums[0], nums[1], ..., nums[i] 中选择一个子序列
  // 并且选择的子序列的最后一个元素的下标为偶数和奇数的「最大交替和」
  const dp = Array.from(new Array(n), () => new Array(2).fill(0));
  dp[0][0] = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + nums[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - nums[i]);
  }
  return dp[n - 1][0];
};

var maxAlternatingSum = function (nums: number[]): number {
  const n = nums.length;
  let even = nums[0];
  let odd = 0;
  for (let i = 1; i < n; i++) {
    even = Math.max(even, odd + nums[i]);
    odd = Math.max(odd, even - nums[i]);
  }
  return even;
};
// @lc code=end

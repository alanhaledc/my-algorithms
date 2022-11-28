/*
 * @lc app=leetcode.cn id=813 lang=typescript
 *
 * [813] 最大平均值和的分组
 *
 * https://leetcode.cn/problems/largest-sum-of-averages/description/
 *
 * algorithms
 * Medium (56.40%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    13.1K
 * Total Submissions: 22.7K
 * Testcase Example:  '[9,1,2,3,9]\n3'
 *
 * 给定数组 nums 和一个整数 k 。我们将给定的数组 nums 分成 最多 k 个相邻的非空子数组 。 分数 由每个子数组内的平均值的总和构成。
 *
 * 注意我们必须使用 nums 数组中的每一个数进行分组，并且分数不一定需要是整数。
 *
 * 返回我们所能得到的最大 分数 是多少。答案误差在 10^-6 内被视为是正确的。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [9,1,2,3,9], k = 3
 * 输出: 20.00000
 * 解释:
 * nums 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20.
 * 我们也可以把 nums 分成[9, 1], [2], [3, 9].
 * 这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值.
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,2,3,4,5,6,7], k = 4
 * 输出: 20.50000
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 *
 *
 */

// @lc code=start
// dp
function largestSumOfAverages(nums: number[], k: number): number {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  // dp[i][j] -> nums 在区间 [0, i−1] 被切分成 j 个子数组的最大平均值和
  const dp = Array.from(new Array(n + 1), () => new Array(k + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    dp[i][1] = prefixSum[i] / i;
  }
  for (let j = 2; j <= k; j++) {
    for (let i = j; i <= n; i++) {
      for (let x = j - 1; x < i; x++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[x][j - 1] + (prefixSum[i] - prefixSum[x]) / (i - x)
        );
      }
    }
  }
  return dp[n][k];
}
// @lc code=end

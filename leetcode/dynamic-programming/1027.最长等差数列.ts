/*
 * @lc app=leetcode.cn id=1027 lang=typescript
 *
 * [1027] 最长等差数列
 *
 * https://leetcode.cn/problems/longest-arithmetic-subsequence/description/
 *
 * algorithms
 * Medium (44.07%)
 * Likes:    300
 * Dislikes: 0
 * Total Accepted:    33.1K
 * Total Submissions: 68.7K
 * Testcase Example:  '[3,6,9,12]'
 *
 * 给你一个整数数组 nums，返回 nums 中最长等差子序列的长度。
 *
 * 回想一下，nums 的子序列是一个列表 nums[i1], nums[i2], ..., nums[ik] ，且 0 <= i1 < i2 < ...
 * < ik <= nums.length - 1。并且如果 seq[i+1] - seq[i]( 0 <= i < seq.length - 1)
 * 的值都相同，那么序列 seq 是等差的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,6,9,12]
 * 输出：4
 * 解释：
 * 整个数组是公差为 3 的等差数列。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [9,4,7,2,10]
 * 输出：3
 * 解释：
 * 最长的等差子序列是 [4,7,10]。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [20,1,15,3,10,5,8]
 * 输出：4
 * 解释：
 * 最长的等差子序列是 [20,15,10,5]。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 1000
 * 0 <= nums[i] <= 500
 *
 *
 */

// @lc code=start
// dp
function longestArithSeqLength(nums: number[]): number {
  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  const diff = maxVal - minVal;
  let res = 1;
  for (let d = -diff; d <= diff; d++) {
    const dp = new Array(maxVal + 1).fill(-1);
    for (const num of nums) {
      const prev = num - d;
      if (prev >= minVal && prev <= maxVal && dp[prev] !== -1) {
        dp[num] = Math.max(dp[num], dp[prev] + 1);
        res = Math.max(res, dp[num]);
      }
      dp[num] = Math.max(dp[num], 1);
    }
  }
  return res;
}
// @lc code=end

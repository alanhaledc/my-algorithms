/*
 * @lc app=leetcode.cn id=2475 lang=typescript
 *
 * [2475] 数组中不等三元组的数目
 *
 * https://leetcode.cn/problems/number-of-unequal-triplets-in-array/description/
 *
 * algorithms
 * Easy (75.17%)
 * Likes:    54
 * Dislikes: 0
 * Total Accepted:    16.3K
 * Total Submissions: 20.9K
 * Testcase Example:  '[4,4,2,4,3]'
 *
 * 给你一个下标从 0 开始的正整数数组 nums 。请你找出并统计满足下述条件的三元组 (i, j, k) 的数目：
 *
 *
 * 0 <= i < j < k < nums.length
 * nums[i]、nums[j] 和 nums[k] 两两不同 。
 *
 * 换句话说：nums[i] != nums[j]、nums[i] != nums[k] 且 nums[j] != nums[k]
 * 。
 *
 *
 *
 *
 * 返回满足上述条件三元组的数目。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [4,4,2,4,3]
 * 输出：3
 * 解释：下面列出的三元组均满足题目条件：
 * - (0, 2, 4) 因为 4 != 2 != 3
 * - (1, 2, 4) 因为 4 != 2 != 3
 * - (2, 3, 4) 因为 2 != 4 != 3
 * 共计 3 个三元组，返回 3 。
 * 注意 (2, 0, 4) 不是有效的三元组，因为 2 > 0 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,1,1,1,1]
 * 输出：0
 * 解释：不存在满足条件的三元组，所以返回 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 100
 * 1 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
var unequalTriplets = function (nums: number[]): number {
  nums.sort();
  const n = nums.length;
  let res = 0;
  for (let i = 0, j = 0; i < n; i = j) {
    while (j < n && nums[i] === nums[j]) {
      j++;
    }
    res += i * (j - i) * (n - j);
  }
  return res;
};

var unequalTriplets = function (nums: number[]): number {
  const cnt: Map<number, number> = new Map();
  const n = nums.length;
  let res = 0;
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) ?? 0) + 1);
  }
  let t = 0;
  for (const count of cnt.values()) {
    res += t * count * (n - t - count);
    t += count;
  }
  return res;
};
// @lc code=end

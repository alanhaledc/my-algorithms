/*
 * @lc app=leetcode.cn id=1095 lang=typescript
 *
 * [1095] 山脉数组中查找目标值
 *
 * https://leetcode-cn.com/problems/find-in-mountain-array/description/
 *
 * algorithms
 * Hard (36.86%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    14.9K
 * Total Submissions: 40.3K
 * Testcase Example:  '[1,2,3,4,5,3,1]\n3'
 *
 * （这是一个 交互式问题 ）
 *
 * 给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index) 等于 target 最小 的下标 index
 * 值。
 *
 * 如果不存在这样的下标 index，就请返回 -1。
 *
 *
 *
 * 何为山脉数组？如果数组 A 是一个山脉数组的话，那它满足如下条件：
 *
 * 首先，A.length >= 3
 *
 * 其次，在 0 < i < A.length - 1 条件下，存在 i 使得：
 *
 *
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 *
 *
 *
 *
 * 你将 不能直接访问该山脉数组，必须通过 MountainArray 接口来获取数据：
 *
 *
 * MountainArray.get(k) - 会返回数组中索引为k 的元素（下标从 0 开始）
 * MountainArray.length() - 会返回该数组的长度
 *
 *
 *
 *
 * 注意：
 *
 * 对 MountainArray.get 发起超过 100 次调用的提交将被视为错误答案。此外，任何试图规避判题系统的解决方案都将会导致比赛资格被取消。
 *
 * 为了帮助大家更好地理解交互式问题，我们准备了一个样例
 * “答案”：https://leetcode-cn.com/playground/RKhe3ave，请注意这 不是一个正确答案。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：array = [1,2,3,4,5,3,1], target = 3
 * 输出：2
 * 解释：3 在数组中出现了两次，下标分别为 2 和 5，我们返回最小的下标 2。
 *
 * 示例 2：
 *
 * 输入：array = [0,1,2,4,2,1], target = 3
 * 输出：-1
 * 解释：3 在数组中没有出现，返回 -1。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= mountain_arr.length() <= 10000
 * 0 <= target <= 10^9
 * 0 <= mountain_arr.get(index) <= 10^9
 *
 *
 */

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

export {};

interface MountainArray {
  get(index: number): number;
  length(): number;
}

// @lc code=start
// binary search
function findInMountainArray(target: number, mountainArr: MountainArray) {
  let left = 0;
  let right = mountainArr.length() - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const peak = left; // mount peak

  // search target on the left side of the mount
  const index = binarySearch(0, peak, true);
  if (index !== -1) {
    return index;
  }

  // search target on the right side of the mount
  return binarySearch(peak + 1, mountainArr.length() - 1, false);

  // flag is determining if you need to convert
  function binarySearch(left: number, right: number, flag: boolean): number {
    if (!flag) target *= -1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const cur = mountainArr.get(mid) * (flag ? 1 : -1);
      if (cur === target) {
        return mid;
      } else if (cur < target) {
        left = mid + 1;
      } else if (cur > target) {
        right = mid - 1;
      }
    }
    return -1;
  }
}
// @lc code=end

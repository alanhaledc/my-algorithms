/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (48.07%)
 * Likes:    179
 * Dislikes: 0
 * Total Accepted:    45.9K
 * Total Submissions: 90.6K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 *
 * ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
 *
 * 请找出其中最小的元素。
 *
 * 你可以假设数组中不存在重复元素。
 *
 * 示例 1:
 *
 * 输入: [3,4,5,1,2]
 * 输出: 1
 *
 * 示例 2:
 *
 * 输入: [4,5,6,7,0,1,2]
 * 输出: 0
 *
 */

// @lc code=start
// binary search
var findMin = function (nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  if (nums[right] > nums[0]) return nums[0];

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    if (nums[mid] > nums[0]) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

// binary search 2
var findMin = function (nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] < nums[right]) {
      right = pivot;
    } else {
      left = pivot + 1;
    }
  }

  return nums[left];
};
// @lc code=end

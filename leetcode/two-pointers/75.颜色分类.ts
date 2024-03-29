/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (51.30%)
 * Likes:    475
 * Dislikes: 0
 * Total Accepted:    91.7K
 * Total Submissions: 166.5K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 *
 * 示例:
 *
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 *
 * 进阶：
 *
 *
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 *
 *
 */

// @lc code=start
/**
 * Do not return anything, modify nums in-place instead.
 */
// two pointers
var sortColors = function (nums: number[]) {
  let p0 = 0;
  let cur = 0;
  let p2 = nums.length - 1;

  let tmp: number;
  while (cur <= p2) {
    // put it on left side of cur
    if (nums[cur] === 0) {
      tmp = nums[p0];
      nums[p0++] = nums[cur];
      nums[cur++] = tmp;
    }
    // put it on right side of cur
    else if (nums[cur] === 2) {
      tmp = nums[cur];
      nums[cur] = nums[p2];
      nums[p2--] = tmp;
    }
    // no move
    else {
      cur++;
    }
  }
};

// one pointer
var sortColors = function (nums: number[]) {
  const n = nums.length;
  let p = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  }

  for (let i = p; i < n; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  }
};

// array
var sortColors = function (nums: number[]) {
  let red = 0;
  let white = 0;
  let blue = 0;

  // collect color
  for (const num of nums) {
    switch (num) {
      case 0:
        red++;
        break;
      case 1:
        white++;
        break;
      case 2:
        blue++;
        break;
    }
  }

  // sort nums via color
  for (let i = 0; i < nums.length; i++) {
    if (red) {
      nums[i] = 0;
      red--;
    } else if (white) {
      nums[i] = 1;
      white--;
    } else if (blue) {
      nums[i] = 2;
      blue--;
    }
  }
};
// @lc code=end

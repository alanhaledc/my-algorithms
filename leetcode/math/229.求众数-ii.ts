/*
 * @lc app=leetcode.cn id=229 lang=typescript
 *
 * [229] 求众数 II
 *
 * https://leetcode-cn.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (46.53%)
 * Likes:    443
 * Dislikes: 0
 * Total Accepted:    43.8K
 * Total Submissions: 89.8K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[3,2,3]
 * 输出：[3]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：[1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：[1,1,1,3,3,2,2,2]
 * 输出：[1,2]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 *
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。
 *
 */

export {};

// @lc code=start
// 摩尔投票法
function majorityElement(nums: number[]): number[] {
  let element1 = 0;
  let element2 = 0;
  let vote1 = 0;
  let vote2 = 0;

  for (const num of nums) {
    //如果该元素为第一个元素，则计数加1
    if (vote1 > 0 && num === element1) {
      vote1++;
    }

    //如果该元素为第二个元素，则计数加1
    else if (vote2 > 0 && num === element2) {
      vote2++;
    }

    // 选择第一个元素
    else if (vote1 === 0) {
      element1 = num;
      vote1++;
    }

    // 选择第二个元素
    else if (vote2 === 0) {
      element2 = num;
      vote2++;
    }

    //如果三个元素均不相同，则相互抵消1次
    else {
      vote1--;
      vote2--;
    }
  }

  let cnt1 = 0;
  let cnt2 = 0;
  for (const num of nums) {
    if (vote1 > 0 && num === element1) {
      cnt1++;
    }
    if (vote2 > 0 && num === element2) {
      cnt2++;
    }
  }

  // 检测元素出现的次数是否满足要求
  const ans = [];
  if (vote1 > 0 && cnt1 > Math.floor(nums.length / 3)) {
    ans.push(element1);
  }
  if (vote2 > 0 && cnt2 > Math.floor(nums.length / 3)) {
    ans.push(element2);
  }

  return ans;
}
// @lc code=end

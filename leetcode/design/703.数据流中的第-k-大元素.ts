/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/description/
 *
 * algorithms
 * Easy (49.08%)
 * Likes:    223
 * Dislikes: 0
 * Total Accepted:    41.9K
 * Total Submissions: 85.5K
 * Testcase Example:  '["KthLargest","add","add","add","add","add"]\n' +
  '[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
 *
 * 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。
 * 
 * 请实现 KthLargest 类：
 * 
 * 
 * KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
 * int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * 输出：
 * [null, 4, 5, 5, 8, 8]
 * 
 * 解释：
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * -10^4 
 * -10^4 
 * 最多调用 add 方法 10^4 次
 * 题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素
 * 
 * 
 */

export {};

// @lc code=start
class KthLargest {
  nums: number[];
  k: number;
  constructor(k: number, nums: number[]) {
    this.nums = nums;
    this.k = k;
  }

  add(val: number): number {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    return this.nums[this.k - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

/*
 * @lc app=leetcode.cn id=1803 lang=typescript
 *
 * [1803] 统计异或值在范围内的数对有多少
 *
 * https://leetcode.cn/problems/count-pairs-with-xor-in-a-range/description/
 *
 * algorithms
 * Hard (43.37%)
 * Likes:    79
 * Dislikes: 0
 * Total Accepted:    4.9K
 * Total Submissions: 10.1K
 * Testcase Example:  '[1,4,2,7]\n2\n6'
 *
 * 给你一个整数数组 nums （下标 从 0 开始 计数）以及两个整数：low 和 high ，请返回 漂亮数对 的数目。
 *
 * 漂亮数对 是一个形如 (i, j) 的数对，其中 0 <= i < j < nums.length 且 low <= (nums[i] XOR
 * nums[j]) <= high 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,4,2,7], low = 2, high = 6
 * 输出：6
 * 解释：所有漂亮数对 (i, j) 列出如下：
 * ⁠   - (0, 1): nums[0] XOR nums[1] = 5
 * ⁠   - (0, 2): nums[0] XOR nums[2] = 3
 * ⁠   - (0, 3): nums[0] XOR nums[3] = 6
 * ⁠   - (1, 2): nums[1] XOR nums[2] = 6
 * ⁠   - (1, 3): nums[1] XOR nums[3] = 3
 * ⁠   - (2, 3): nums[2] XOR nums[3] = 5
 *
 *
 * 示例 2：
 *
 * 输入：nums = [9,8,4,2,1], low = 5, high = 14
 * 输出：8
 * 解释：所有漂亮数对 (i, j) 列出如下：
 * ​​​​​    - (0, 2): nums[0] XOR nums[2] = 13
 * - (0, 3): nums[0] XOR nums[3] = 11
 * - (0, 4): nums[0] XOR nums[4] = 8
 * - (1, 2): nums[1] XOR nums[2] = 12
 * - (1, 3): nums[1] XOR nums[3] = 10
 * - (1, 4): nums[1] XOR nums[4] = 9
 * - (2, 3): nums[2] XOR nums[3] = 6
 * - (2, 4): nums[2] XOR nums[4] = 5
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 2 * 10^4
 * 1 <= nums[i] <= 2 * 10^4
 * 1 <= low <= high <= 2 * 10^4
 *
 *
 */

export {};

// @lc code=start
function countPairs(nums: number[], low: number, high: number): number {
  const HIGH_BIT = 14;
  return f(nums, high) - f(nums, low - 1);

  function f(nums: number[], x: number): number {
    const root = new Trie();
    let res = 0;
    for (let i = 1; i < nums.length; i++) {
      add(nums[i - 1]);
      res += get(nums[i], x);
    }
    return res;

    function add(num: number) {
      let cur = root;
      for (let k = HIGH_BIT; k >= 0; k--) {
        const bit = (num >> k) & 1;
        if (!cur.son[bit]) {
          cur.son[bit] = new Trie();
        }
        cur = cur.son[bit];
        cur.sum++;
      }
    }

    function get(num: number, x: number): number {
      let cur = root;
      let sum = 0;
      for (let k = HIGH_BIT; k >= 0; k--) {
        const r = (num >> k) & 1;
        if (((x >> k) & 1) !== 0) {
          if (cur.son[r]) {
            sum += cur.son[r].sum;
          }
          if (!cur.son[r ^ 1]) {
            return sum;
          }
          cur = cur.son[r ^ 1];
        } else {
          if (!cur.son[r]) {
            return sum;
          }
          cur = cur.son[r];
        }
      }
      sum += cur.sum;
      return sum;
    }
  }
}

class Trie {
  son: Trie[];
  sum: number;

  constructor() {
    this.son = [];
    this.sum = 0;
  }
}
// @lc code=end

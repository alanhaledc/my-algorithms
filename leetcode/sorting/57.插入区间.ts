/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (32.90%)
 * Likes:    155
 * Dislikes: 0
 * Total Accepted:    24.3K
 * Total Submissions: 65.1K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 * 示例 1:
 *
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 *
 *
 * 示例 2:
 *
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 *
 */

// @lc code=start
// array sort
var insert = function (
  intervals: number[][],
  newInterval: number[]
): number[][] {
  const res: number[][] = [];
  let [left, right] = newInterval;
  let placed = false;
  for (const [l, r] of intervals) {
    if (l > right) {
      if (!placed) {
        res.push([left, right]);
        placed = true;
      }
      res.push([l, r]);
    } else if (r < left) {
      res.push([l, r]);
    } else {
      left = Math.min(left, l);
      right = Math.max(right, r);
    }
  }
  if (!placed) {
    res.push([left, right]);
  }
  return res;
};
// @lc code=end

// the same as leetcode 56
var insert = function (
  intervals: number[][],
  newInterval: number[]
): number[][] {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  const res: number[][] = [];
  let idx = -1;
  for (const interval of intervals) {
    if (idx === -1 || interval[0] > res[idx][1]) {
      res.push(interval);
      idx++;
    } else {
      res[idx][1] = Math.max(res[idx][1], interval[1]);
    }
  }
  return res;
};

/*
 * @lc app=leetcode.cn id=1267 lang=typescript
 *
 * [1267] 统计参与通信的服务器
 *
 * https://leetcode.cn/problems/count-servers-that-communicate/description/
 *
 * algorithms
 * Medium (61.96%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    19.2K
 * Total Submissions: 29.2K
 * Testcase Example:  '[[1,0],[0,1]]'
 *
 * 这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。
 *
 * 如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。
 *
 * 请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：grid = [[1,0],[0,1]]
 * 输出：0
 * 解释：没有一台服务器能与其他服务器进行通信。
 *
 * 示例 2：
 *
 *
 *
 * 输入：grid = [[1,0],[1,1]]
 * 输出：3
 * 解释：所有这些服务器都至少可以与一台别的服务器进行通信。
 *
 *
 * 示例 3：
 *
 *
 *
 * 输入：grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
 * 输出：4
 * 解释：第一行的两台服务器互相通信，第三列的两台服务器互相通信，但右下角的服务器无法与其他服务器通信。
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m <= 250
 * 1 <= n <= 250
 * grid[i][j] == 0 or 1
 *
 *
 */

// @lc code=start
var countServers = function (grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const rowIndexes: number[] = [];
  for (let i = 0; i < m; i++) {
    const row = grid[i];
    const sum = row.reduce((a, b) => a + b, 0);
    if (sum > 1) {
      rowIndexes.push(i);
    }
  }
  const colIndexes: number[] = [];
  for (let j = 0; j < n; j++) {
    const col = grid.map((row) => row[j]);
    const sum = col.reduce((a, b) => a + b, 0);
    if (sum > 1) {
      colIndexes.push(j);
    }
  }
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (rowIndexes.includes(i) || colIndexes.includes(j)) {
          count++;
        }
      }
    }
  }
  return count;
};

var countServers = function (grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const rowIndexes: Map<number, number> = new Map();
  const colIndexes: Map<number, number> = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowIndexes.set(i, (rowIndexes.get(i) ?? 0) + 1);
        colIndexes.set(j, (colIndexes.get(j) ?? 0) + 1);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (rowIndexes.get(i)! > 1 || colIndexes.get(j)! > 1) {
          count++;
        }
      }
    }
  }
  return count;
};
// @lc code=end

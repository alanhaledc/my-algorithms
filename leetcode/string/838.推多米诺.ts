/*
 * @lc app=leetcode.cn id=838 lang=typescript
 *
 * [838] 推多米诺
 *
 * https://leetcode-cn.com/problems/push-dominoes/description/
 *
 * algorithms
 * Medium (54.18%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 23.2K
 * Testcase Example:  '"RR.L"'
 *
 * n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。
 *
 * 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。
 *
 * 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。
 *
 * 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。
 *
 * 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：
 *
 *
 * dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
 * dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
 * dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
 *
 *
 * 返回表示最终状态的字符串。
 *
 *
 * 示例 1：
 *
 *
 * 输入：dominoes = "RR.L"
 * 输出："RR.L"
 * 解释：第一张多米诺骨牌没有给第二张施加额外的力。
 *
 *
 * 示例 2：
 *
 *
 * 输入：dominoes = ".L.R...LR..L.."
 * 输出："LL.RR.LLRRLL.."
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == dominoes.length
 * 1 <= n <= 10^5
 * dominoes[i] 为 'L'、'R' 或 '.'
 *
 *
 */

// @lc code=start
function pushDominoes(dominoes: string): string {
  const strArr = dominoes.split("");
  const n = strArr.length;
  let i = 0;
  let left = "L";
  while (i < n) {
    let j = i;
    // 找到一段连续的没有被推动的骨牌
    while (j < n && strArr[j] === ".") {
      j++;
    }
    const right = j < n ? strArr[j] : "R";
    // 方向相同，那么这些竖立骨牌也会倒向同一方向
    if (left === right) {
      while (i < j) {
        strArr[i] = right;
        i++;
      }
    }
    // 方向相对，那么就从两侧向中间倒
    else if (left === "R" && right === "L") {
      let k = j - 1;
      while (i < k) {
        strArr[i] = "R";
        i++;
        strArr[k] = "L";
        k--;
      }
    }
    left = right;
    i = j + 1;
  }
  return strArr.join("");
}
// @lc code=end

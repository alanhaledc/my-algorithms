/*
 * @lc app=leetcode.cn id=481 lang=typescript
 *
 * [481] 神奇字符串
 *
 * https://leetcode.cn/problems/magical-string/description/
 *
 * algorithms
 * Medium (57.61%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    16.8K
 * Total Submissions: 26.6K
 * Testcase Example:  '6'
 *
 * 神奇字符串 strArr 仅由 '1' 和 '2' 组成，并需要遵守下面的规则：
 *
 *
 * 神奇字符串 strArr 的神奇之处在于，串联字符串中 '1' 和 '2' 的连续出现次数可以生成该字符串。
 *
 *
 * strArr 的前几个元素是 strArr = "1221121221221121122……" 。如果将 strArr 中连续的若干 1 和 2 进行分组，可以得到 "1 22 11
 * 2 1 22 1 22 11 2 11 22 ......" 。每组中 1 或者 2 的出现次数分别是 "1 2 2 1 1 2 1 2 2 1 2 2
 * ......" 。上面的出现次数正是 strArr 自身。
 *
 * 给你一个整数 n ，返回在神奇字符串 strArr 的前 n 个数字中 1 的数目。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 6
 * 输出：3
 * 解释：神奇字符串 strArr 的前 6 个元素是 “122112”，它包含三个 1，因此返回 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 10^5
 *
 *
 */

// @lc code=start
// two pointers
var magicalString = function (n: number): number {
  if (n < 4) return 1;
  const strArr: string[] = new Array(n).fill("0");
  strArr[0] = "1";
  strArr[1] = "2";
  strArr[2] = "2";
  let res = 1;
  let i = 2;
  let j = 3;
  while (j < n) {
    let size = parseInt(strArr[i]);
    const num = 3 - parseInt(strArr[j - 1]);
    while (size > 0 && j < n) {
      strArr[j] = String(num);
      if (num === 1) {
        res++;
      }
      j++;
      size--;
    }
    i++;
  }
  return res;
};

var magicalString = function (n: number): number {
  let res = 0;
  let sign = true;
  const signArr: boolean[] = [];

  for (let i = 0; i < n; i++) {
    signArr.push(sign);
    if (signArr[i] === true) {
      res++;
    } else {
      signArr.push(sign);
    }
    sign = !sign;
  }

  return res;
};
// @lc code=end

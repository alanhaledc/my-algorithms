/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 *
 * https://leetcode-cn.com/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Medium (43.70%)
 * Likes:    303
 * Dislikes: 0
 * Total Accepted:    28.8K
 * Total Submissions: 65.6K
 * Testcase Example:  '"bcabc"'
 *
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 *
 * 注意：该题与 1081
 * https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
 * 相同
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "bcabc"
 * 输出："abc"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbacdcbc"
 * 输出："acdb"
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
// stack
function removeDuplicateLetters(s: string): string {
  const visit: number[] = new Array(26).fill(0);
  const num: Map<string, number> = new Map();
  for (const ch of s) {
    num.set(ch, (num.get(ch) ?? 0) + 1);
  }

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!visit[getCharCode(ch)]) {
      while (stack.length && stack[stack.length - 1] > ch) {
        if (num.get(stack[stack.length - 1])! > 0) {
          visit[getCharCode(stack[stack.length - 1])] = 0;
          stack.pop();
        } else {
          break;
        }
      }
      visit[getCharCode(ch)] = 1;
      stack.push(ch);
    }
    num.set(ch, (num.get(ch) ?? 0) - 1);
  }

  return stack.join("");

  function getCharCode(ch: string): number {
    return ch.charCodeAt(0) - "a".charCodeAt(0);
  }
}
// @lc code=end

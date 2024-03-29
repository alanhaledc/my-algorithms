/*
 * @lc app=leetcode.cn id=401 lang=typescript
 *
 * [401] 二进制手表
 *
 * https://leetcode-cn.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (56.28%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    33.1K
 * Total Submissions: 58.7K
 * Testcase Example:  '1'
 *
 * 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。每个 LED 代表一个 0 或
 * 1，最低位在右侧。
 *
 *
 * 例如，下面的二进制手表读取 "3:25" 。
 *
 *
 *
 *
 * （图源：WikiMedia - Binary clock samui moon.jpg ，许可协议：Attribution-ShareAlike 3.0
 * Unported (CC BY-SA 3.0) ）
 *
 * 给你一个整数 turnedOn ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 按任意顺序 返回答案。
 *
 * 小时不会以零开头：
 *
 *
 * 例如，"01:00" 是无效的时间，正确的写法应该是 "1:00" 。
 *
 *
 * 分钟必须由两位数组成，可能会以零开头：
 *
 *
 * 例如，"10:2" 是无效的时间，正确的写法应该是 "10:02" 。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：turnedOn = 1
 * 输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：turnedOn = 9
 * 输出：[]
 *
 *
 *
 *
 * 解释：
 *
 *
 * 0
 *
 *
 */

// @lc code=start
// iterator
var readBinaryWatch = function (turnedOn: number): string[] {
  const ret: string[] = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const hCounts = h.toString(2).split("0").join("").length;
      const mCounts = m.toString(2).split("0").join("").length;
      if (hCounts + mCounts === turnedOn) {
        ret.push(`${h}:${(m < 10 ? "0" : "") + m}`);
      }
    }
  }

  return ret;
};

// bit + iterator
var readBinaryWatch = function (turnedOn: number): string[] {
  const ret: string[] = [];
  for (let i = 0; i < 1024; i++) {
    const h = i >> 6;
    const m = i & 63;
    const counts = i.toString(2).split("0").join("").length;
    if (h < 12 && m < 60 && counts === turnedOn) {
      ret.push(`${h}:${(m < 10 ? "0" : "") + m}`);
    }
  }

  return ret;
};
// @lc code=end

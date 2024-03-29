/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (37.40%)
 * Likes:    362
 * Dislikes: 0
 * Total Accepted:    68.5K
 * Total Submissions: 161.7K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 *
 */

// @lc code=start
var multiply = function (num1: string, num2: string): string {
  return String(BigInt(num1) * BigInt(num2)); // use Number will be out of range
};

// math addition
var multiply = function (num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  const l1 = num1.length;
  const l2 = num2.length;
  const ret: number[] = new Array(l1 + l2).fill(0);

  for (let i = l2 - 1; i >= 0; i--) {
    for (let j = l1 - 1; j >= 0; j--) {
      const sum = ret[i + j + 1] + Number(num2[i]) * Number(num1[j]);
      ret[i + j + 1] = sum % 10;
      ret[i + j] += (sum / 10) | 0; // 进位
    }
  }

  if (ret[0] === 0) ret.shift();
  return ret.join("");
};

// math multiplication
var multiply = function (num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  const l1 = num1.length;
  const l2 = num2.length;
  const ret: number[] = new Array(l1 + l2 - 1).fill(0);

  for (let i = 0; i < l2; i++) {
    for (let j = 0; j < l1; j++) {
      ret[i + j] += Number(num2[i]) * Number(num1[j]);
    }
  }

  let len = ret.length;
  let str = "";
  let num = 0;

  while (len--) {
    num += ret[len];
    str = String(num % 10) + str; // 拼接字符串
    num = (num / 10) | 0; // 进位
  }

  return num > 0 ? num + str : str;
};
// @lc code=end

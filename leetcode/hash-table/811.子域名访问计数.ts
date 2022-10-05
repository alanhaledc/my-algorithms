/*
 * @lc app=leetcode.cn id=811 lang=typescript
 *
 * [811] 子域名访问计数
 *
 * https://leetcode.cn/problems/subdomain-visit-count/description/
 *
 * algorithms
 * Medium (71.54%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    23K
 * Total Submissions: 31.2K
 * Testcase Example:  '["9001 discuss.leetcode.com"]'
 *
 * 网站域名 "discuss.leetcode.com" 由多个子域名组成。顶级域名为 "com" ，二级域名为 "leetcode.com"
 * ，最低一级为 "discuss.leetcode.com" 。当访问域名 "discuss.leetcode.com" 时，同时也会隐式访问其父域名
 * "leetcode.com" 以及 "com" 。
 *
 * 计数配对域名 是遵循 "rep d1.d2.d3" 或 "rep d1.d2" 格式的一个域名表示，其中 rep 表示访问域名的次数，d1.d2.d3
 * 为域名本身。
 *
 *
 * 例如，"9001 discuss.leetcode.com" 就是一个 计数配对域名 ，表示 discuss.leetcode.com 被访问了
 * 9001 次。
 *
 *
 * 给你一个 计数配对域名 组成的数组 cpdomains ，解析得到输入中每个子域名对应的 计数配对域名 ，并以数组形式返回。可以按 任意顺序
 * 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：cpdomains = ["9001 discuss.leetcode.com"]
 * 输出：["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
 * 解释：例子中仅包含一个网站域名："discuss.leetcode.com"。
 * 按照前文描述，子域名 "leetcode.com" 和 "com" 都会被访问，所以它们都被访问了 9001 次。
 *
 * 示例 2：
 *
 *
 * 输入：cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com",
 * "5 wiki.org"]
 * 输出：["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5
 * org","1 intel.mail.com","951 com"]
 * 解释：按照前文描述，会访问 "google.mail.com" 900 次，"yahoo.com" 50 次，"intel.mail.com" 1
 * 次，"wiki.org" 5 次。
 * 而对于父域名，会访问 "mail.com" 900 + 1 = 901 次，"com" 900 + 50 + 1 = 951 次，和 "org" 5
 * 次。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= cpdomain.length <= 100
 * 1 <= cpdomain[i].length <= 100
 * cpdomain[i] 会遵循 "repi d1i.d2i.d3i" 或 "repi d1i.d2i" 格式
 * repi 是范围 [1, 10^4] 内的一个整数
 * d1i、d2i 和 d3i 由小写英文字母组成
 *
 *
 */

// @lc code=start
function subdomainVisits(cpDomains: string[]): string[] {
  const counts: Map<string, number> = new Map();
  for (const cpd of cpDomains) {
    handleCpDomain(cpd);
  }

  const res: string[] = [];
  for (const [key, count] of counts) {
    res.push(`${count} ${key}`);
  }
  return res;

  function handleCpDomain(cpDomain: string) {
    const [rep, domain] = cpDomain.split(" ");
    const count = parseInt(rep, 10);
    setCount(domain, count);
    const [, d2, d3] = domain.split(".");
    if (d3) {
      setCount(d3, count);
      setCount(`${d2}.${d3}`, count);
    } else {
      setCount(d2, count);
    }
  }

  function setCount(key: string, count: number) {
    counts.set(key, (counts.get(key) ?? 0) + count);
  }
}
// @lc code=end

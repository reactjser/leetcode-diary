/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let freq = new Array(128).fill(0);
  let l = 0,
    r = -1; // 滑动窗口为s[l...r]
  let res = 0;

  while (l < s.length) {
    if (r + 1 < s.length && freq[s[r + 1].charCodeAt(0)] === 0) {
      freq[s[++r].charCodeAt(0)]++;
    } else {
      freq[s[l++].charCodeAt(0)]--;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
};

const s = 'abcabcbb';
const ret = lengthOfLongestSubstring(s);
console.log(ret);

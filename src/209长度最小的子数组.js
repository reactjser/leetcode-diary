/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let l = 0,
    r = -1; // nums[l...r]为滑动窗口
  let sum = 0; // nums[l...r]之和
  let res = nums.length + 1; // 满足要求的长度

  while (l < nums.length) {
    if (r + 1 < nums.length && sum < s) {
      sum += nums[++r];
    } else {
      sum -= nums[l++];
    }

    if (sum >= s) {
      res = Math.min(res, r - l + 1);
    }
  }

  if (res === nums.length + 1) {
    return 0;
  }
  return res;
};

const s = 7,
  nums = [2, 3, 1, 2, 4, 3];
const ret = minSubArrayLen(s, nums);
console.log(ret);

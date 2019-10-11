/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 在nums[l...r]之中查找target
  let l = 0;
  let r = nums.length - 1;

  // 注意：当l === r时，区间[l...r]依然是有效的，即表示该区间只包含一个元素
  while (l <= r) {
    const mid = l + Math.trunc((r - l) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

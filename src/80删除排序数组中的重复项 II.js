/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let k = 2; // 定义区间[0, k)均不重复
  for (let i = 2; i < nums.length; i++) {
    if (nums[k - 1] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

const nums = [1, 1, 1, 2, 2, 3];
const ret = removeDuplicates(nums);
console.log(ret);

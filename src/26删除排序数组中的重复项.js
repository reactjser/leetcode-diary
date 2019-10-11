/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let k = 1; // 定义区间[0, k)均不重复
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const ret = removeDuplicates(nums);
console.log(ret);

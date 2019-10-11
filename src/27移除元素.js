/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0; // 定义区间[0, k)均不等于val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }

  return k;
};

const nums = [3, 2, 2, 3];
const val = 3;
const len = removeElement(nums, val);
console.log(len);

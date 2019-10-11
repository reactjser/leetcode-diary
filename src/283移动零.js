/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var moveZeroes = function(nums) {
  // 使用双指针解法
  let k = 0; // nums中，[0...k)的元素均为非0元素

  // 遍历到第i个元素后，保证[0...i]中的所有非0元素
  // 都按照顺序排列在[0...k)中
  // 同时，[k...i]为0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== k) { // 避免自身与自身交换
        const temp = nums[k];
        nums[k] = nums[i];
        nums[i] = temp;
      }
      k++;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

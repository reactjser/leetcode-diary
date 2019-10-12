/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsOld = function(nums) {
  const count = new Array(3).fill(0);
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  let index = 0;
  for (let i = 0; i < count[0]; i++) {
    nums[index++] = 0;
  }
  for (let i = 0; i < count[1]; i++) {
    nums[index++] = 1;
  }
  for (let i = 0; i < count[2]; i++) {
    nums[index++] = 2;
  }
};

/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var sortColors = function(nums) {
  let zero = -1; // nums[0...zero] === 0
  let two = nums.length; // nums[two...n-1] === 2
  for (let i = 0; i < two; ) {
    if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      two--;
      [nums[i], nums[two]] = [nums[two], nums[i]];
    } else {
      zero++;
      [nums[zero], nums[i]] = [nums[i], nums[zero]];
      i++;
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);

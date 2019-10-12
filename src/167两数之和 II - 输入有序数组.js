/**
 * 二分查找
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumOld = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let l = 0;
    let r = numbers.length - 1;
    if (2 * numbers[i] > target) {
      // 在区间[0, i - 1]中找
      r = i - 1;
    } else { // 因为是从前往后遍历，当2 * numbers[i] === target时，如有正确解，必在该索引i后
      // 在区间[i + 1, numbers.length - 1]中找
      l = i + 1;
    }

    while (l <= r) {
      const mid = l + Math.trunc((r - l) / 2);

      // 注意条件：函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2
      if (target === numbers[mid] + numbers[i] && i !== mid) {
        return [i + 1, mid + 1];
      }
      if (target < numbers[mid] + numbers[i]) {
        // 在区间[l...mid -1]中查找
        r = mid - 1;
      } else {
        // 在区间[mid+1...r]中查找
        l = mid + 1;
      }
    }
  }

  // 如未找到正确解
  return [];
};

/**
 * 双指针
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while(l < r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1];
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      r--;
    }
  }

  // 无解情况
  return [];
};

const numbers = [1,2,3,4,4,9,56,90];
const target = 8;
const ret = twoSum(numbers, target);
console.log(ret);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeOld = function(nums1, m, nums2, n) {
  let t = 0;
  let b = 0;
  const num1_copy = nums1.slice(0, m);
  let i = 0;

  
  while (t < m && b < n) {
    if (num1_copy[t] <= nums2[b]) {
      nums1[i++] = num1_copy[t++];
    } else {
      nums1[i++] = nums2[b++];
    }
  }

  while (t < m) {
    nums1[i++] = num1_copy[t++];
  }

  while (b < n) {
    nums1[i++] = nums2[b++];
  }
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let t = m - 1;
  let b = n - 1;
  let i = m + n - 1;

  while(t >= 0 && b >= 0) {
    if (nums1[t] >= nums2[b]) {
      nums1[i--] = nums1[t--];
    } else {
      nums1[i--] = nums2[b--];
    }
  }

  while (t >= 0) {
    nums1[i--] = nums1[t--];
  }

  while (b >= 0) {
    nums1[i--] = nums2[b--];
  }
}

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
const nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

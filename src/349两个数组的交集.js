/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i]);
  }

  const res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      res.push(nums2[i]);
      set.delete(nums2[i]);
    }
  }

  return res;
};

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
const ret = intersection(nums1, nums2);
console.log(ret);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map();
  const ans = [];

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (map.has(num)) {
      ans.push(num);
      map.set(num, map.get(num) - 1);
      if (map.get(num) === 0) {
        map.delete(num);
      }
    }
  }

  return ans;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseStringOld = function(s) {
  for (let i = 0; i < Math.trunc(s.length / 2); i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }
};

const s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);

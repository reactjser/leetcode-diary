/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (!/[0-9a-zA-Z]/.test(s[l])) {
      l++;
    } else if (!/[0-9a-zA-Z]/.test(s[r])) {
      r--;
    } else {
      if (s[l].toUpperCase() !== s[r].toUpperCase()) {
        return false;
      } else {
        l++;
        r--;
      }
    }
  }

  return true;
};

const s = 'A man, a plan, a canal: Panama';
const ret = isPalindrome(s);
console.log(ret);

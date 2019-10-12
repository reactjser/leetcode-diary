/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let l = 0;
  let r = s.length - 1;
  const isVowel = str =>
    str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u';

  const arr = s.split('');
  while (l < r) {
    if (!isVowel(arr[l].toLowerCase())) {
      l++;
    } else if (!isVowel(arr[r].toLowerCase())) {
      r--;
    } else {
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }
  return arr.join('');
};

const s = 'hello';
const ret = reverseVowels(s);
console.log(ret);

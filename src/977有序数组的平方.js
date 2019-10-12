/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const N = A.length;
  let j = 0; // 指针 j 正向读取非负数部分
  while (j < N && A[j] < 0) {
    j++;
  }
  let i = j - 1; // 指针 i 反向读取负数部分


  const ans = new Array(N);
  let t = 0;

  while (i >= 0 && j < N) {
    if (A[i] * A[i] < A[j] * A[j]) {
      ans[t++] = A[i] * A[i];
      i--;
    } else {
      ans[t++] = A[j] * A[j];
      j++;
    }
  }

  while (i >= 0) {
    ans[t++] = A[i] * A[i];
    i--;
  }
  while (j < N) {
    ans[t++] = A[j] * A[j];
    j++;
  }

  return ans;
};

const A = [-4, -1, 0, 3, 10];
const ret = sortedSquares(A);
console.log(ret);

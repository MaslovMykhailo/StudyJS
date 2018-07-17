'use strict';

const mulStr = (n1, n2) => {
  let s1 = n1.split('').reverse();
  let s2 = n2.split('').reverse();
  let result = new Array(s1.length + s2.length).fill(0);
  
  for (let i = 0 ; i < s2.length ; ++i) {
    let carry = 0;
    for (let j = 0 ; j < s1.length; ++j) {
      result[i+j] += carry + parseInt(s2[i]) * parseInt(s1[j]);
      carry = Math.floor(result[i+j]/10);
      result[i+j] %= 10;
    }
    result[i+s1.length] += carry;
  }
  
  if (!result[s1.length + s2.length-1]) result.pop();
  
  return result.reverse().join('');
};

const memoize = new Map();

const powStr = (n, p) => {
  let intP = parseInt(p);
  if (!intP) return 1;
  if (intP === 1) return n;

  let key = n + '^' + p;
  if (memoize.has(key)) return memoize.get(key);
  
  let d = Math.floor(intP / 2);
  let result = mulStr(powStr(n, d), powStr(n, intP - d));
  memoize.set(key, result);
  
  return result;
};

console.log(powStr('333', '444'));
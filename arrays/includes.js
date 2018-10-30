// for sorted arrays O(log(n))

const includes = (arr, n) => {
  if (!arr.length) return false;
  
  const recursionSearch = (l, r) => {
    if (l === r) return arr[l];
    
    let m = Math.floor((l + r) / 2);
    
    if (n <= arr[m]) {
      return recursionSearch(l, m);
    } else {
      return recursionSearch(m+1, r);
    }
  };
  
  return recursionSearch(0, arr.length - 1) === n;
};

console.log(includes([1, 3, 8, 10], 8));
console.log(includes([1, 3, 8, 8, 15], 15));
console.log(includes([1, 3, 8, 10, 15], 9));
const reduce = (arr, accumulatorFn, initVal = 0) => {
  let accmulator = initVal;
  
  for (let i = 0 ; i < arr.length ; i++) {
    accmulator = accumulatorFn(accmulator, arr[i]);
  }
  
  return accmulator;
};

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
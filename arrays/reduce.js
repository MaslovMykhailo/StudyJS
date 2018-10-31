const reduce = (arr, accumulatorFn, initVal = 0) => {
  let accumulator = initVal;
  
  for (let i = 0 ; i < arr.length ; i++) {
    accumulator = accumulatorFn(accumulator, arr[i]);
  }
  
  return accumulator;
};

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
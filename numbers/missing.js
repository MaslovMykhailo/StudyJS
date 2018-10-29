// find missing from 1 to n

const missing = arr => {
  if (!arr.length) return undefined;
  
  const min = 1;
  const max = Math.max(...arr);
  
  let sum = arr.reduce((a, b) => a + b);
  let theoreticalSum = max * (max + 1) / 2 - min * (min - 1) / 2;
  
  let missed = theoreticalSum - sum;
  
  return missed ? missed : undefined;
};

console.log(missing([]));
console.log(missing([1, 4, 3]) );
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));
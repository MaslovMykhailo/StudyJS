const intersection = (arr1, arr2) => {
  const set = new Set(arr1);
  
  return arr2.filter(n => set.has(n));
};

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(intersection([1, 5, 4, 2], [7, 12]));

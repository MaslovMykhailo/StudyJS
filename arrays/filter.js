const filter = (array, compareFn) => {
  const filtered = [];
  
  for (let i = 0 ; i < array.length ; i++) {
    if (compareFn(array[i])) filtered.push(array[i]);
  }
  
  return filtered;
};

console.log(filter([1, 2, 3, 4], n => n < 3));
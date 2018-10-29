const isSorted = arr => {
  if (!arr.length) return true;
  
  return arr.join('') === arr.sort((a, b) => a - b).join('');
};

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));
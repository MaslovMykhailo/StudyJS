const uniq = array => [...(new Set(array))];

console.log(uniq([]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));
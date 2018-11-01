const permut = str => {
  if (str.length === 0) return [];
  if (str.length < 2) return [str];
  
  const permutations = [];
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (str.indexOf(char) !== i) continue;
    
    let remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);
    
    for (let subPermutation of permut(remainingStr)) {
      permutations.push(char + subPermutation)
    }
  }
  
  return permutations;
};

console.log(permut(''));
console.log(permut('abc'));
console.log(permut('abcd'));

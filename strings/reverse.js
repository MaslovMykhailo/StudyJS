const reverse = string => {
  
  let reversed = '';
  
  for (let i = string.length - 1 ; i > -1 ; i--) {
    reversed += string[i];
  }
  
  return reversed;
};

console.log(reverse(''));
console.log(reverse('abcdef'));

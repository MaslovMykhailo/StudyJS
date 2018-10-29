const memoizeFactorial = { '0': 1, '1': 1, '2': 2 };

const factorial = n => {
  
  const factorialRecursive = n => {
    let res = memoizeFactorial[n];
    
    if (!res) {
      res = memoizeFactorial[n] = n * factorialRecursive(n-1);
    }
    
    return res;
  };
  
  return factorialRecursive(n)
};


console.log('0 : ', factorial(0));
console.log('1 : ', factorial(1));
console.log('6 : ', factorial(6));
console.log('7 : ', factorial(7));
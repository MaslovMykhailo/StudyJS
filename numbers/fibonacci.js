const memoizeFibonacci = { '0': 0, '1': 1 };

const fibonacci = n => {
  
  const fib = n => {
    if (n === 0) return 0;
    
    let res = memoizeFibonacci[n];
    if (!res) {
      res = memoizeFibonacci[n] = fib(n-1) + fib(n-2);
    }
    return res;
  };
  
  return fib(n);
};


console.log('0 : ', fibonacci(0));
console.log('1 : ', fibonacci(1));
console.log('10 : ', fibonacci(10));
console.log('20 : ', fibonacci(20));
console.log('30 : ', fibonacci(30));
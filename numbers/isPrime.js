const isPrime = n => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (!(n % 2)) return false;
  if (!(n % 3)) return false;
  
  let i = 5;
  while(i*i <= n) {
    if (!(i % n) || !(n % (i + 2))) return false;
    i += 6;
  }
  return true;
};

console.log('0 :', isPrime(0));
console.log('1 :', isPrime(1));
console.log('17 :', isPrime(17));
console.log('10000000000000 :', isPrime(10000000000000));
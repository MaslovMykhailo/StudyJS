async function reduceAsync(array, fn, initial) {
  let accumulator = initial;
  
  for (let i = 0 ; i < array.length ; i++) {
    accumulator = fn(accumulator, await array[i]());
  }
  
  return accumulator;
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

async function f() {
  console.log(await reduceAsync([a, b, c], (acc, value) => [...acc, value], []));
  console.log(await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']));
}

f();

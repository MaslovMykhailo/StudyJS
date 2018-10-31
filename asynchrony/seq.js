async function seq(funcArr) {
  const res = [];
  
  for (let i = 0 ; i < funcArr.length ; i++) {
    res.push(await funcArr[i]());
  }
  
  return res;
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => Promise.resolve('c');

async function f() {
  console.log(await seq([a, b, c]));
  console.log(await seq([a, c, b]));
}

f();


'use string';

function debounce(f, ms) {

  let state = 0, COOLDOWN = 1;

  return function(...args) {
    if(state) return;

    f.apply(this, args);

    state = COOLDOWN;

    setTimeout(function() {state = 0}, ms);
  }
}

// function() { ... };
// let f = debounce(f, ms);

let a = () => console.log('foo');
let b = debounce(a, 100);

b();
b();
b();

setTimeout(() => b(), 150);
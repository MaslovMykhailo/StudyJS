'use string';
// вызов не чаще чем в N мс

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
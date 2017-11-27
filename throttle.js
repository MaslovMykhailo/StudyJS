'use strict';
// Тормозилка

function throttle(f, ms) {
  let isThrottled = false, savedThis, savedArgs;

  function wrapper(...args) {

    if(isThrottled){
      savedThis = this;
      savedArgs = args;
      return;
    }

    f.apply(this, args);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if(savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
      }
    }, ms);

  }

  return wrapper;
}

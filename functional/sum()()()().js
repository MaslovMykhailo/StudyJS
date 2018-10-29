'use strict';

function sum(n) {
    n = n ? n : 0;

    const f = function (x) {
        x = x ? x : 0;
        return sum(n + x);
    };

    f.toString = f.valueOf = function () {
        return n;
    };

    return f;
}

console.log(+sum(1)(2)(3));
console.log(+sum(1)()()(1));
console.log(+sum()(5)());
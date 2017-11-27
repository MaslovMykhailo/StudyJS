'use strict';

const operators = {
        '+': (a, b) => a + b ,
    '-': (a, b) => a - b ,
    '*': (a, b) => a * b ,
    '/': (a, b) => a / b
}

function calc(expr) {

    if(!expr) return 0;

    const expresion = expr.split(' ');

    const stack = [];

    expresion.forEach(i => {
        if(Object.keys(operators).includes(i)) stack.push(i);
    });

    for(let i = 0 ; i < stack.length ; i++) {

        const index = expresion.indexOf(stack[i]);

        const a = +expresion[index - 2];
        const b = +expresion[index - 1];
        const start = index - 2;
        const res = operators[stack[i]](a, b);

        expresion.splice(start, 3, res);
    }

    return +expresion[expresion.length - 1];
}

console.log(calc('1 2 + 4 +'));
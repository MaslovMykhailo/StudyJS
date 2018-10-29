'use strict';

const operators = {
        '+': (a, b) => a + b ,
    '-': (a, b) => a - b ,
    '*': (a, b) => a * b ,
    '/': (a, b) => a / b
};

function calc(expr) {

    if(!expr) return 0;

    const expression = expr.split(' ');

    const stack = [];

    expression.forEach(i => {
        if(Object.keys(operators).includes(i)) stack.push(i);
    });

    for(let i = 0 ; i < stack.length ; i++) {

        const index = expression.indexOf(stack[i]);

        const a = +expression[index - 2];
        const b = +expression[index - 1];
        const start = index - 2;
        const res = operators[stack[i]](a, b);

        expression.splice(start, 3, res);
    }

    return +expression[expression.length - 1];
}

console.log(calc('1 2 + 4 +'));
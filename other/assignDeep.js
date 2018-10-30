const assignDeep = (object, ...args) => {
  args.forEach(arg => {
    Object.keys(arg).forEach(key => {
        object[key] =
          typeof arg[key] === 'object' ?
            assignDeep(
              typeof object[key] === 'object' ? object[key] : {}, arg[key]
            ) : arg[key];
    })
  });
  return object;
};

console.log(assignDeep({ a: 1 }, {}, { a: 5 }));
console.log(assignDeep({ a: 1 }, { a: 2 }));
console.log(assignDeep({ a: 1 }, { a: { b: 2 } }));
console.log(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }));
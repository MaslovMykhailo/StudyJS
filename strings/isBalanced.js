const isBalanced = string => {
  if (!string.length) return true;
  
  const getType = s => {
    switch (s) {
      case '{': return 1;
      case '}': return -1;
      case '(': return 2;
      case ')': return -2;
      case '[': return 3;
      case ']': return -3;
      default: return 0;
    }
  };
  
  const stack = [];
  
  for (let i = 0 ; i < string.length ; i++) {
    let type = getType(string[i]);
    
    if (type) {
      if (type > 0) {
        stack.push(type);
      } else {
        if (stack.pop() + type) return false;
      }
    }
  }
  
  return !stack.pop();
};

console.log(isBalanced('(foo { bar (baz) [boo] })'));
console.log(isBalanced('foo { bar { baz }'));
console.log(isBalanced('foo { (bar [baz] } )'));

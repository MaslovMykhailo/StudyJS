const isPalindrome = string =>
  string.toLowerCase().split(' ').join('') ===
  string.toLowerCase().split(' ').join('').split('').reverse().join('');

console.log(isPalindrome(''));
console.log(isPalindrome('abcdcba') );
console.log(isPalindrome('abcd') );
console.log(isPalindrome('A man a plan a canal Panama'));

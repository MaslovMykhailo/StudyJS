'use strict' ;

function Calculator() {

  let method = {
    '+' : function(a, b){
      return a + b ;
    } ,
    '-' : function(a, b){
      return a - b;
    }
  } ;

  this.calculate = function(str){
    let split = str.split(' ') ;
    let a = +split[0] , b = +split[2], oper = split[1] ;

    if(!method[oper] || isNaN(a) || isNaN(b)) return NaN ;

    return method[oper](a, b) ;
  } ;

  this.addMethod = function(name, func) {
    method[name] = func ;
  } ;

}

let calc = new Calculator;

calc.addMethod("*", function(a, b) {
  return a * b;
});
calc.addMethod("/", function(a, b) {
  return a / b;
});
calc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

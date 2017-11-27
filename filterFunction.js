'use strict' ;

let resArr = [] ;

function filter(arr, func) {
  return resArr ;
} ;

function inBetween(a, b) {
  resArr = arr.filter(function(number) {
    return (number < b && number > a)
  }) ;
} ;

function inArray(array) {
  resArr = arr.filter(function(number) {
    return (array.indexOf(number) > -1)
  }) ;
} ;

'use strict' ;

function User(fullName) {
  this.fullName = fullName;
}

let vasya = new User("Василий Пупкин");

Object.defineProperty(vasya, 'firstName', {
  get : function() {
    let split = this.fullName.split(' ') ;
    return split[0] ;
  },

  set : function(value) {
    let split = this.fullName.split(' ') ;
    split.splice(0, 1, value) ;
    this.fullName = split.join(' ') ;
  } ,
}) ;

Object.defineProperty(vasya, 'lastName', {
  get : function() {
    let split = this.fullName.split(' ') ;
    return split[1] ;
  },

  set : function(value) {
    let split = this.fullName.split(' ') ;
    split.splice(1, 1, value) ;set:
    this.fullName = split.join(' ') ;
  } ,
}) ;

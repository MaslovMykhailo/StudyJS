'use strict' ;

function formatDate(date) {

  function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
  }

  let res, day = '', month = '', year = '' ;

  if(getClass(date) == 'Date') {
    day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() ;
    month = (date.getMonth() + 1) < 10 ?
    '0' + (date.getMonth() + 1) :
    '' + (date.getMonth() + 1) ;
    year = ('' + date.getFullYear()).substring(2, 4);
  }

  if(getClass(date) == 'Array') {
    day = date[2] < 10 ? '0' + date[2] : date[2] ;
    month = (date[1] + 1) < 10 ? '0' + (date[1] + 1) : date[1] + 1 ;
    year = ('' + date[0]).substring(2, 4);
  }

  if(getClass(date) == 'String') {
    date = date.split('-');
    day = date[2];
    month = date[1];
    year = ('' + date[0]).substring(2, 4);
  }

  if(getClass(date) == 'Number') {
    date = new Date(date * 1000);
    day = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate() ;
    month = (date.getMonth() + 1) < 10 ?
    '0' + (date.getMonth() + 1) :
    '' + (date.getMonth() + 1) ;
    year = ('' + date.getFullYear()).substring(2, 4);
  }

  return res = day.concat('.', month, '.', year) ;
}

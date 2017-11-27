'use strict';

let expr, res;

while(true) {

  expr = prompt('Введите выражение?', '2+');
  if(expr === null) break;

  try {
    res = eval(expr);

    if(isNaN(res) || res === Infinity) {
      throw new Error('Результат неопределён');
    } else {
      alert(res);
    }

    break ;

  } catch(err) {
    alert('Ошибка:' + err.name);
  }
}

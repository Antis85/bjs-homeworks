"use strict";

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (!(arr1.length == arr2.length)) {
    // console.log("нет");
    return false;
  } else if (arr1.every((element, index) => element === arr2[index])) {
    // console.log("да");
    return true;
  } else {
    //  console.log("нет");
    return false;
  }
}

/*compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true 
...OK*/

function memorize(fn, limit) {
  const memory = [];
  return function(...args) {
    const search = memory.find(obj => compareArrays(obj.args, args));
    if (search) {
      return search.result;
    } else {
      const result = fn (...args);
      memory.push({ args, result });
        if (memory.length > limit) {
        memory.shift();
      }
      return result;   
    } 
  }
}

function testCase(testFunction, timerName) {
  const testArr = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
  console.time(timerName);
  for (let i = 0; i < 100; i++) {
    testArr.forEach(arrItem => testFunction(...arrItem));
  }
  console.timeEnd(timerName);
}

/*const mSum = memorize(sum, 10);
testCase(sum, "timer sum");
testCase(mSum, "timer mSum");*/


/*
sleep on
timer sum: 251081.020ms
timer mSum: 1503.811ms

sleep off
timer sum: 0.652ms
timer mSum: 1.531ms

Вывод: 
Пересчитывание результатов выполнения функции каждый раз заново занимает на порядки(в данном случае) больше времени,
чем "запоминание" и вывод уже посчитанных результатов. Оптимизация выполнения функции, в случае суммирования нескольких чисел,
позволяет сократить время выполнения функции сложения в 167 раз, т.е. функция после оптимизации выполняется в 167 раз быстрее,
чем до отимизации! 
После отключения задержки выполнения функции выигрыш от оптимизации стал менее значительным - "всего" в 2 раза быстрее. 
Проведенная оптимизация в большей степени актуальна для случая многократного вызова функций, 
связанных со сложными ресурсоемкими вычислениями(возможно из области Data Science, Big Data).
*/

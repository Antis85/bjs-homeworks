"use strict";

function getResult(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let x = [];
  if (d == 0) {
    x[0] = -b / (2 * a);
  } else if (d > 0) {
    x[0] = (-b + Math.sqrt(d)) / (2 * a);
    x[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  return x;
}

function getAverageMark(marks) {
  let averageMark = 0;
  let integralMark = 0;
  if (marks && !marks.length) {
    return 0;
  } else if (marks.length > 5) {
    console.log("Количество оценок больше пяти. При расчете среднего балла будут учтены только первые пять оценок");//консоль - по заданию
    marks.splice(5);
  }
  for (let i = 0; i < marks.length; i++) {
    integralMark += marks[i];
  }
  averageMark = integralMark / marks.length;
  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}

"use strict";

function getResult(a, b, c) {
  let A = a, B = b, C = c;
  let D = B ** 2 - 4 * A * C;
  let x = [];
  if (D == 0) {
    x[0] = -B / (2 * A);
  } else if (D > 0) {
    x[0] = (-B + D ** 0.5) / (2 * A);
    x[1] = (-B - D ** 0.5) / (2 * A);
  }
  return x;
}

function getAverageMark(marks) {
  let averageMark = 0;
  let integralMark = 0;
  if (marks == "" || marks == undefined) {
    return 0;
  } else if (marks.length > 5) {
    console.log("Количество оценок больше пяти. При расчете среднего балла будут учтены только первые пять оценок");//консоль - по заданию
    marks.splice(5);
    for (let i = 0; i < marks.length; i++) {
      integralMark += marks[i];
    }
  } else {
    for (let i = 0; i < marks.length; i++) {
      integralMark += marks[i];
    }
  }
  averageMark = integralMark / marks.length;
  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let userYearOfBirth = new Date(dateOfBirthday).getFullYear();  
  let currentYear = new Date().getFullYear();  
  let userAge = currentYear - userYearOfBirth;  
  let result = "";
  if (userAge >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
}

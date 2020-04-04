"use strict";

function getSolutions(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c; 
  if (d == 0) {
    let x1 = -b / (2 * a);    
    return { ["D"]: d, roots: [x1] };
  } else if (d < 0) {    
    return { ["D"]: d, roots: [] };
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);    
    return { ["D"]: d, roots: [x1, x2] };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);  
  console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2+${b}x+${c}\nЗначение дискриминанта:${result["D"]}`);
  if (result["D"] < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result["D"] == 0) {
    console.log(`Уравнение имеет один корень X\u2081 = ${result.roots}`);
  } else {
    console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`);
  }
}



function getAverageScore(data) {
  let sumAverageMark = 0;
  let subjectsCount = 0;
  for (let mark in data) {
    let marks = data[mark];    
    sumAverageMark += getAverageMark(marks);
    data[mark] = getAverageMark(marks);
    subjectsCount++;
  }  
  if (subjectsCount) {
    data["average"] = sumAverageMark / subjectsCount;    
    return data;
  } else {
    data["average"] = 0;    
    return data;
  }
}

function getAverageMark(marks) {
  let averageMark = 0;
  let integralMark = 0;
  if (marks && !marks.length) {
    return 0;
  } else {
    for (let i = 0; i < marks.length; i++) {
      integralMark += marks[i];
    }
    averageMark = integralMark / marks.length;    
    return averageMark;
  }
}


function getPersonData(secretData) {
  let decodedData = {};
  for (let code in secretData) {
    secretData[code] = getDecodedValue(secretData[code]);
  }
  decodedData.firstName = secretData.aaa;
  decodedData.lastName = secretData.bbb;
  return decodedData;  
}

function getDecodedValue(secret) {  
  let decodedValue = secret ? "Эмильо" : "Родриго";
  return decodedValue;
}

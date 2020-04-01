"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
for (let argument in arguments) {
    let valueToCheck = parseInt(arguments[argument]);
    if (isNaN(valueToCheck)) {
      switch (+argument) {
      case 0:
          return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
          //break;
        case 1:
          return `Параметр <Первоначальный взнос> содержит неправильное значение <${contribution}>`;
          //break;
        case 2:
          return `Параметр <Сумма кредита> содержит неправильное значение <${amount}>`;
          //break;       
        //default:
          //;
      }
    }
  }
  let percentPurged = parseInt(percent);
  let contributionPurged = parseInt(contribution);
  let amountPurged = parseInt(amount);
  let sumPayment = amountPurged - contributionPurged;
  let monthCount = (new Date(date).getFullYear() - new Date().getFullYear()) * 12 + new Date(date).getMonth() - new Date().getMonth();
  let percentPerMonth = percentPurged / 1200;  
  let paymentPerMonth = sumPayment * (percentPerMonth + percentPerMonth / (Math.pow(1 + percentPerMonth, monthCount) - 1));
  let totalAmount = +((paymentPerMonth * monthCount).toFixed(2));
  return totalAmount;
}


function getGreeting(name) {
  let greeting;
  if (name) {
    greeting = `Привет, мир! Меня зовут ${name}`;
  } else {
    greeting = "Привет, мир! Меня зовут Аноним";
  }
  console.log(greeting);
  return greeting;
}

"use strict";

function getAnimalSound(animal) {
  if (animal === undefined) {
    return null;
  } else {
    let animalSound = animal.sound;
    return animalSound;
  }
}



function getAverageMark(marks) {
  let average = 0;  
  for (let mark in marks) {
    average += marks[mark] / marks.length;    
  }
  const roundedAverage = Math.round(average);
  return roundedAverage;
}


function checkBirthday(birthdate) {
  const now = new Date().getTime();  
  const birthday = new Date(birthdate).getTime();  
  const age = now - birthday;
  const diff = age / (1000 * 24 * 3600 * 366);
  let verdict = (age > 18) ? true : false;
  return verdict;
}
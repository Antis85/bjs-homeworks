"use strict";

//Задача №1
function parseCount(quantity) {  
  const check = Number.parseInt(quantity);
  if (isNaN(check)) {
    throw new Error("Невалидное значение");
  } else {
    return check;
  }
}

function validateCount(value) {
  try {
  return parseCount(value);
  } catch(error){    
    return error;
  }
}

//Задача №2
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const halfPerimeter = this.getPerimeter() / 2;
    const area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
    return +area.toFixed(3);
  }
}


function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle (a, b, c);
    return triangle;
  } catch(error) {
    let object = {};
    object.getPerimeter = object.getArea = () => 'Ошибка! Неправильный треугольник';
    return object;
  }
}

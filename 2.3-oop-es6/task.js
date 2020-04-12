"use strict";

//Задача №1
class Weapon {
  constructor({ name, attack, durability, range }) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.startDurability = durability;
    this.range = range;

  }

  takeDamage(damage) {
    this.durability -= damage;
    if (damage > this.durability) {
      this.durability = 0;
    }
  }

  getDamage() {
    console.log("int.dur: " + this.durability);
    console.log("int.att: " + this.attack);
    if (this.durability >= this.startDurability * 0.3) {
      return this.attack;
    } else if (!this.durability) {
      return 0;
    } else {
      return this.attack / 2;
    }
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

//Задача №2
class Arm extends Weapon {
  constructor() {
    super(name);
    this.name = "Рука";
    this.attack = 1;
    this.durability = Infinity;
    this.startDurability = Infinity;
    this.range = 1;
  }
}

class Bow extends Weapon {
  constructor() {
    super(name);
    this.name = "Лук";
    this.attack = 10;
    this.durability = 200;
    this.startDurability = 200;
    this.range = 3;

  }
}

class Sword extends Weapon {
  constructor() {
    super(name);
    this.name = "Меч";
    this.attack = 25;
    this.durability = 500;
    this.startDurability = 500;
    this.range = 1;

  }
}

class Knife extends Weapon {
  constructor() {
    super(name);
    this.name = "Нож";
    this.attack = 5;
    this.durability = 300;
    this.startDurability = 300;
    this.range = 1;
  }
}

class Staff extends Weapon {
  constructor() {
    super(name);
    this.name = "Посох";
    this.attack = 8;
    this.durability = 300;
    this.startDurability = 300;
    this.range = 2;

  }
}

class LongBow extends Bow {
  constructor() {
    super(name);
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super(name);
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
    this.startDurability = 800;
  }
}

class StormStaff extends Staff {
  constructor() {
    super(name);
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3;
  }
}

//Задача №3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjectMarks = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (isNaN(grade) || grade > 5 || grade < 1) {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`;
    } else if (!this.subjectMarks[subject]) {
      this.subjectMarks[subject] = [];      
    }
    this.subjectMarks[subject].push(grade);
    return this.subjectMarks[subject].length;    
  }

  getAverageBySubject(subject) {
    let averageBySubject = 0;
    if (!this.subjectMarks[subject]) {
      return 0;
    } else {
      for (let i = 0; i < this.subjectMarks[subject].length; i++) {
        averageBySubject += this.subjectMarks[subject][i];
      }
      return averageBySubject / this.subjectMarks[subject].length;
    }
  }

  getTotalAverage() {
    let totalAverage = 0;
    for (let subject in this.subjectMarks) {      
      totalAverage += this.getAverageBySubject([subject]) / this.subjectMarks[subject].length;      
    }
    return totalAverage;
  }
}

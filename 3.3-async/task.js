"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(timeAlarm, callback, idAlarm) {
    if (!idAlarm) {
      throw new Error("Невозможно идентифицировать будильник. Параметр id не передан.");
    } else if (this.alarmCollection.find(obj => obj.idAlarm == idAlarm)) {
      throw new Error(`Звонок с id ${idAlarm} уже существует`);
    } else {
      this.alarmCollection.push({ timeAlarm, callback, idAlarm });
    }
  }

  removeClock(idAlarmToDelete) {
    const isDel = this.alarmCollection.some(obj => obj.idAlarm == idAlarmToDelete);
    this.alarmCollection = this.alarmCollection.filter(obj => obj.idAlarm !== idAlarmToDelete);    
    return isDel;
  }

  getCurrentFormattedTime() {
    if (new Date().getMinutes() < 10) {
      return new Date().getHours() + ":0" + new Date().getMinutes();
    } else {
      return new Date().getHours() + ":" + new Date().getMinutes();
    }
  }

 start() {
    const checkClock = (alarmObj) => {
      if (alarmObj.timeAlarm == this.getCurrentFormattedTime()) {
        alarmObj.callback();
      }
    }
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(alarmObj => checkClock(alarmObj));
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;      
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.idAlarm} заведен на ${alarm.timeAlarm}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
    let alarm = new AlarmClock();
    alarm.addClock('15:35', () => console.log('Скоро спать'), 1);
    alarm.addClock('15:36', () => {
        console.log('Пора готовиться ко сну!');
        alarm.removeClock(2)
    }, 2);
    /*
    alarm.addClock('21:01', () => console.log('Иди умывайся!')); // отсутствие id
    */
    alarm.addClock('15:37', () => {
        console.log('Иди спать, завтра рано на работу!');
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);
    /*
    alarm.addClock('21:05', () => {
        console.log('Иди спать, завтра рано на работу!')
    }, 1); // существующий id
    */
    alarm.printAlarms();
    alarm.start();  
}
testCase();

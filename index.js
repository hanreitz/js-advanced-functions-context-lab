/* Your Code Here */

class Employee {
  constructor(firstName, familyName, title, payPerHour) {
    this.firstName = firstName;
    this.familyName = familyName;
    this.title = title;
    this.payPerHour = payPerHour;
    this.timeInEvents = [];
    this.timeOutEvents = []
  }
}

class TimeEvent {
  constructor(type, date, hour) {
    this.type = type;
    this.date = date;
    this.hour = hour;
  }
}

const createEmployeeRecord = function (empArray) {
  const [firstName, familyName, title, payPerHour] = empArray
  return new Employee(firstName, familyName, title, payPerHour)
}

const createEmployeeRecords = function (csvData) {
  return csvData.map(createEmployeeRecord)
}

const createTimeInEvent = function (timeStamp) {
  const clockIn = new TimeEvent('TimeIn', timeStamp.split(' ')[0], parseInt(timeStamp.split(' ')[1]))
  this.timeInEvents.push(clockIn)
  return this
}

const createTimeOutEvent = function (timeStamp) {
  const clockOut = new TimeEvent('TimeOut', timeStamp.split(' ')[0], parseInt(timeStamp.split(' ')[1]))
  this.timeOutEvents.push(clockOut)
  return this
}

const hoursWorkedOnDate = function (date) {
  const clockIn = this.timeInEvents.find(t => t.date === date).hour
  const clockOut = this.timeOutEvents.find(t => t.date === date).hour
  return (clockOut - clockIn)/100
}

const wagesEarnedOnDate = function (date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  let payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

const calculatePayroll = function (empArray) {
  const totalPayroll = empArray.reduce(function(memo, e) {
    return memo + allWagesFor.call(e)
  }, 0)
  return totalPayroll
}

const findEmployeeByFirstName = function (collection, firstNameString) {
  return collection.find(e => e.firstName === firstNameString)
}
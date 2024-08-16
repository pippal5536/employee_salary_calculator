// Inputs: 
let totalDayWorkedHours = 80;
let totalNightWorkedHours = 0;

// Constants:
const payRateDay = 10;
const payRateNight = 12;
const federalRate = (dayShift && nightShift) ? 0.5 : 1.5;
const maxBaseHours = 40;
const workLimitHours = 60;

// Non-contant variables:
let dayShift = true;
let nightShift = false;
let isNegativeInput = (totalDayWorkedHours < 0) ? true : false 
let totalWorkedHours, regularHours, totalOvertimeHours, weightedPayRate;
let basePay, overtimePayRate, overtimePay, totalPayWeek;

// If it's a day shift, set the total worked hours to the total day worked hours. 
if (dayShift) {
  totalWorkedHours = totalDayWorkedHours;
  } 

// Calculate overtime hours if total worked hours exceed the base hours, with adjustments if the work limit is exceeded.
if ((totalWorkedHours > maxBaseHours) && (totalWorkedHours <= workLimitHours)) {
  
  totalOvertimeHours = totalWorkedHours - maxBaseHours;
  
} else if (totalWorkedHours > workLimitHours) {
  totalWorkedHours = workLimitHours;
  totalOvertimeHours = workLimitHours - maxBaseHours;
  console.warn(`Since the employee exceeded the work limit, regular hours will be capped at ${maxBaseHours}, with the remaining ${totalOvertimeHours} hours classified as overtime.`);
} else {
  totalOvertimeHours = 0;
}

// Calculate regular hours.
regularHours = totalWorkedHours - totalOvertimeHours;

// Calculate payment of a week
if (dayShift) {
  basePay = regularHours * payRateDay;
  overtimePayRate = payRateDay * federalRate;
  overtimePay = overtimePayRate * totalOvertimeHours;
  totalPayWeek = overtimePay + basePay;
}

// Error testings
console.log('input', totalWorkedHours)
console.warn('Overtime', totalOvertimeHours)
console.warn('regular', regularHours)
console.log('Base pay day shift', basePay)
console.log('overtime rate day shift', overtimePayRate)
console.log('overtime pay day shift', overtimePay)
console.log('weekly pay day shift', totalPayWeek)



// Input data
let totalDayWorkedHours = 60;
let totalNightWorkedHours = 0;

// // Constants and variable declarations
let dayShift = true;
let nightShift = false;
const payRateDay = 10;
const payRateNight = 12;
const federalRate = (dayShift && nightShift) ? 0.5 : 1.5;
const maxBaseHours = 40;
const workLimitHours = 60;
let isNegativeInput = (totalDayWorkedHours < 0) ? true : false ;
// If it's a day shift, set the total worked hours to the total day worked hours. 
let totalWorkedHours = dayShift ? totalDayWorkedHours : 0
let regularHours, totalOvertimeHours, weightedPayRate;
let basePay, overtimePayRate, overtimePay, totalPayWeek;

// Calculate overtime hours and adjust total worked hours if work limit is exceeded
totalOvertimeHours = Math.max(0, totalWorkedHours - maxBaseHours);
if (totalWorkedHours > workLimitHours) {
  totalWorkedHours = workLimitHours;
  totalOvertimeHours = workLimitHours - maxBaseHours;
  console.warn(`Since the employee exceeded the work limit, regular hours will be capped at ${maxBaseHours}, with the remaining ${totalOvertimeHours} hours classified as overtime.`);
}

// Determine regular working hours
regularHours = totalWorkedHours - totalOvertimeHours;

// Compute weekly payment based on shift and hours worked
if (dayShift) {
  basePay = regularHours * payRateDay;
  overtimePayRate = payRateDay * federalRate;
  overtimePay = overtimePayRate * totalOvertimeHours;
  totalPayWeek = overtimePay + basePay;
}

// Log results for verification and debugging
console.log('input', totalDayWorkedHours)
console.warn('Overtime', totalOvertimeHours)
console.warn('regular', regularHours)
console.log('Base pay day shift', basePay)
console.log('overtime rate day shift', overtimePayRate)
console.log('overtime pay day shift', overtimePay)
console.log('weekly pay day shift', totalPayWeek)



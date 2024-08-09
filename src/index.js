/* 

Inputs:

payRate: The hourly wage rate, e.g., $10/hour.
baseHours: The maximum number of standard hours worked in a week before overtime is calculated (typically up to 40 hours).
basePay: The total payment for standard hours worked in a week.
overTimeRate: The rate at which overtime is paid. This is generally 1.5 times the regular hourly rate.
federalRate: The federal rate for overtime calculation. It is 0.5 in cases where a weighted average or multiple pay rates are used, otherwise it is 1.5.
overTimePay: The total payment for overtime hours.
overHours: The number of hours worked beyond the baseHours, which are considered overtime.

Outputs:

basePay: Total payment for standard hours worked in a week.
overtimeRate: The effective overtime rate applied for calculating overtime pay.
overtimePay: Total payment for overtime hours worked.
totalPay: Total payment for the week, including both standard and overtime pay.

*/


/*

Assumptions: 
1) Employees get paid weekly.
2) Weekly work limit is 55 hours including over-time. 
3) the payment system is hourly and 10$/h.
4) night shifts pay 12$/h.
5) Max base hours is 40.  
6) Exceeding the work limit will count as unpaid.            

*/

let dayShift = true;
let nightShift = true;

let totalDayWorkedHour = 0;
let totalNightWorkedHour = 41;

const payRateDay = 10;
const payRateNight = 12;

const federalRate = (dayShift && nightShift) ? 0.5 : 1.5;

const maxBaseHour = 40;

const workLimitHour = 60;

let totalWorkedHour = totalDayWorkedHour + totalNightWorkedHour;
totalWorkedHour > 60 ? (console.warn('Employee exceeded work limit and get paid for 60 hours according to company policies.') , totalWorkedHour = workLimitHour) : totalWorkedHour;
 
let basePay = 0;
let totalOvertimeHour = totalWorkedHour >= 40 ? (totalWorkedHour - 40) : 0;
let totaltWorkedHourWithout = totalWorkedHour - totalOvertimeHour;

let overtimePayRate = 0;
let overtimePay = 0;
let totalPayWeek = 0; 

/*
- Multiple pay rate with 40 hours as regular:
    1) Calculate base pay: (total hours on Day shifts * day shift pay rate) + (total hours on Night shifts * Night shift pay rate)
    2) Calculate weighted regular rate of pay: Base pay / total hours of day shifts and Night shifts with overtime
    3) Calculate overtime premium rate: weighted regular rate of pay * 0.5
    4) calculate total overtime premium pay: overtime premium rate * overtime hours [overtime hours = total hours - 40]
    5) Recalculate base pay (if > 40): 40 * weighted regular rate of pay 
    6) Total pay: Base pay + total overtime premium pay 
*/



// TODO: See Math method and its objects on MDN

if (dayShift && nightShift){
  basePay = (totalDayWorkedHour * payRateDay) + (totalNightWorkedHour * payRateNight);
  let weightedPayRate = basePay / totalWorkedHour;
  overtimePayRate = weightedPayRate * 0.5;
  overtimePay = overtimePayRate * totalOvertimeHour;
  (totalWorkedHour > 40) ? (basePay = (totaltWorkedHourWithout * weightedPayRate)) : basePay;
  totalPayWeek = basePay + overtimePay;
  console.log(`
    Employee Payroll Summary:
    --------------------------
    - Shift Type: Day Shift + Night Shift
    - Regular Day Pay Rate: $${payRateDay}/hour
    - Regular Night Pay Rate: $${payRateNight}/hour
    - Regular Weighted Pay Rate: $${weightedPayRate}/hour
    - Regular Hours Worked: ${totaltWorkedHourWithout} hours
    - Regular Earnings: $${basePay}
    - Overtime Hours Worked: ${totalOvertimeHour} hours
    - Overtime Pay Rate: $${overtimePayRate}/hour
    - Overtime Earnings: $${overtimePay}
    --------------------------
    - Total Weekly Earnings: $${totalPayWeek}
`);
} else if (dayShift && !nightShift){
  basePay = payRateDay * totaltWorkedHourWithout;
  overtimePayRate = payRateDay * federalRate;
  overtimePay = overtimePayRate * totalOvertimeHour;
  totalPayWeek = basePay + overtimePay;
 console.log(`
    Employee Payroll Summary:
    --------------------------
    - Shift Type: Day Shift
    - Regular Pay Rate: $${payRateDay}/hour
    - Regular Hours Worked: ${totaltWorkedHourWithout} hours
    - Regular Earnings: $${basePay}
    - Overtime Hours Worked: ${totalOvertimeHour} hours
    - Overtime Pay Rate: $${overtimePayRate}/hour
    - Overtime Earnings: $${overtimePay}
    --------------------------
    - Total Weekly Earnings: $${totalPayWeek}
`);



} else if (!dayShift && nightShift){
  basePay = payRateNight * totaltWorkedHourWithout;
  overtimePayRate = payRateNight * federalRate;
  overtimePay = overtimePayRate * totalOvertimeHour;
  totalPayWeek = basePay + overtimePay;
  console.log(`
    Employee Payroll Summary:
    --------------------------
    - Shift Type: Night Shift
    - Regular Pay Rate: $${payRateNight}/hour
    - Regular Hours Worked: ${totaltWorkedHourWithout} hours
    - Regular Earnings: $${basePay}
    - Overtime Hours Worked: ${totalOvertimeHour} hours
    - Overtime Pay Rate: $${overtimePayRate}/hour
    - Overtime Earnings: $${overtimePay}
    --------------------------
    - Total Weekly Earnings: $${totalPayWeek}
`);
} else{
  console.log('Invalid')
}
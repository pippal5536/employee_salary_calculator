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
let nightShift = false;

const payRateDay = 10;
const payRateNight = 12;

const federalRate = (dayShift && nightShift) ? 1.5 : 0.5;

const maxBaseHour = 40;

const workLimitHour = 60;

let totalWorkedHour = 59;
totalWorkedHour > 60 ? (console.warn('Employee exceeded work limit and get paid for 60 hours according to company policies.') , totalWorkedHour = workLimitHour) : totalWorkedHour;
 
let basePay = 0;
let totalOvertimeHour = totalWorkedHour >= 40 ? (totalWorkedHour - 40) : 0;
let totaltWorkedHourWithout = totalWorkedHour - totalOvertimeHour;

let overtimePayRate = 0;
let overtimePay = 0;
let totalPayWeek = 0; 

/*
Only day/night shift:
 1) calculate base pay: x * total working hours excluding overtime [x = pay rate]
    2) calculate overtime rate of pay: x * 1.5
    3) calculate overtime pay: overtime rate of pay * overtime hours
    4) calculate total pay: base pay + overtime pay
*/

// TODO: See Math method and its objects on MDN
// TODO: Ask gpt about work limit thingy like what happens.

if (dayShift && nightShift){
  console.log('both');
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
  console.log('omnly night shift');
  basePay = payRateNight * totaltWorkedHourWithout;
  console.log(`base pay: ${basePay}`);
  overtimePayRate = payRateDay * federalRate;
  console.log(`over time pay rate: ${overtimePayRate}`);
  overtimePay = overtimePayRate * totalOvertimeHour;
  console.log(`over time pay: ${overtimePay}`);
  totalPayWeek = basePay + overtimePay;
  console.log(`total pay in a week: ${totalPayWeek}`);
} else{
  console.log('Invalid')
}
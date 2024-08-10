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

let dayShift = false;
let nightShift = true;

let totalDayWorkedHour = 20;
let totalNightWorkedHour = 80;

const payRateDay = 10;
const payRateNight = 12;

const federalRate = (dayShift && nightShift) ? 0.5 : 1.5;

const maxBaseHour = 40;

const workLimitHour = 60;

let totalWorkedHour = totalDayWorkedHour + totalNightWorkedHour;


let totalOvertimeHour = totalWorkedHour >= 40 ? (totalWorkedHour - 40) : 0;
let totaltWorkedHourWithout = totalWorkedHour - totalOvertimeHour;
 
let basePay, overtimePayRate, overtimePay, totalPayWeek, weightedPayRate;


if (dayShift || nightShift){
  if (totalWorkedHour > 60) {
  console.warn('Employee exceeded work limit and get paid for 60 hours according to company policies.'); 
  totalWorkedHour = workLimitHour;
  totalOvertimeHour = totalWorkedHour - maxBaseHour;
  } 
  basePay = (totalDayWorkedHour * payRateDay) + (totalNightWorkedHour * payRateNight);
  weightedPayRate = basePay / totalWorkedHour;
  overtimePayRate = weightedPayRate * federalRate;
  overtimePay = overtimePayRate * totalOvertimeHour;
  (totalWorkedHour > 40) ? (basePay = (totaltWorkedHourWithout * weightedPayRate)) : basePay;
  totalPayWeek = basePay + overtimePay;
  console.log(`
    Employee Payroll Summary:
    --------------------------
    - Shift Type: ${(dayShift && nightShift) ? 'Day Shift + Night Shift' : (dayShift) ? 'Day Shift' : 'Night Shift'}
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
} else {
  console.warn('Invalid Credintials')
}



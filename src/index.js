/*

Assumptions: 
1) Employees get paid weekly.
2) Weekly work limit is 60 hours including over-time. 
3) the payment system is hourly and 10$/h.
4) night shifts pay 12$/h.
5) Max base hours is 40.  
6) Exceeding the work limit will count as unpaid.            

*/

let dayShift = false;
let nightShift = true;

let totalDayWorkedHours = 20;
let totalNightWorkedHours = 80;

const payRateDay = 10;
const payRateNight = 12;

const federalRate = (dayShift && nightShift) ? 0.5 : 1.5;

const maxBaseHours = 40;

const workLimitHours = 60;

let totalWorkedHours = totalDayWorkedHours + totalNightWorkedHours;


let totalOvertimeHours = totalWorkedHours > maxBaseHours ? (totalWorkedHours - maxBaseHours) : 0;
let regularHours = totalWorkedHours - totalOvertimeHours;
 
let basePay, overtimePayRate, overtimePay, totalPayWeek, weightedPayRate;


if (dayShift || nightShift){
  if (totalWorkedHours > workLimitHours) {
  console.warn('Employee exceeded work limit and get paid for 60 hours according to company policies.'); 
  totalWorkedHours = workLimitHours;
  totalOvertimeHours = totalWorkedHours - maxBaseHours;
  } 
  basePay = (totalDayWorkedHours * payRateDay) + (totalNightWorkedHours * payRateNight);
  weightedPayRate = basePay / totalWorkedHours;
  overtimePayRate = weightedPayRate * federalRate;
  overtimePay = overtimePayRate * totalOvertimeHours;

  if (totalWorkedHours > maxBaseHours) {
    basePay = regularHours * weightedPayRate;
  }
  
  totalPayWeek = basePay + overtimePay;
  
  console.log(`
    Employee Payroll Summary:
    --------------------------
    - Shift Type: ${(dayShift && nightShift) ? 'Day Shift + Night Shift' : (dayShift) ? 'Day Shift' : 'Night Shift'}
    - Regular Day Pay Rate: $${payRateDay}/hour
    - Regular Night Pay Rate: $${payRateNight}/hour
    - Regular Weighted Pay Rate: $${weightedPayRate}/hour
    - Regular Hours Worked: ${regularHours} hours
    - Regular Earnings: $${basePay}
    - Overtime Hours Worked: ${totalOvertimeHours} hours
    - Overtime Pay Rate: $${overtimePayRate}/hour
    - Overtime Earnings: $${overtimePay}
    --------------------------
    - Total Weekly Earnings: $${totalPayWeek}
`);
} else {
  console.warn('Invalid Credintials')
}



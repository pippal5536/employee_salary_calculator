/*

Assumptions:
1) Employees get paid weekly.
2) Weekly work limit is 60 hours, including overtime.
3) The payment system is hourly, with $10/hour for day shifts.
4) Night shifts pay $12/hour.
5) Maximum base hours are 40.
6) Exceeding the work limit will count as unpaid.

*/

// Flags indicating if the employee has worked day or night shifts
let dayShift = false;
let nightShift = true;

// Total hours worked in day and night shifts
let totalDayWorkedHours = 20;
let totalNightWorkedHours = 80;

// Pay rates for day and night shifts
const payRateDay = 10;
const payRateNight = 12;

// Federal rate for overtime calculation: 
// 0.5 if the employee worked both day and night shifts, otherwise 1.5
const federalRate = (dayShift && nightShift) ? 0.5 : 1.5;

// Maximum base hours before overtime is applied
const maxBaseHours = 40;

// Maximum hours allowed to work in a week
const workLimitHours = 60;

// Calculate the total hours worked combining day and night shifts
let totalWorkedHours = totalDayWorkedHours + totalNightWorkedHours;

// Calculate overtime hours if total worked hours exceed max base hours
let totalOvertimeHours = totalWorkedHours > maxBaseHours ? (totalWorkedHours - maxBaseHours) : 0;
let regularHours = totalWorkedHours - totalOvertimeHours;

// Declare variables to store base pay, overtime pay rate, overtime pay, 
// total weekly pay, and weighted pay rate
let basePay, overtimePayRate, overtimePay, totalPayWeek, weightedPayRate;

// Check if the employee has worked either day or night shifts
if (dayShift || nightShift) {
  
  // If total worked hours exceed the work limit, cap it at workLimitHours
  if (totalWorkedHours > workLimitHours) {
    console.warn('Employee exceeded work limit and will be paid for 60 hours according to company policies.');
    totalWorkedHours = workLimitHours;
    totalOvertimeHours = totalWorkedHours - maxBaseHours;
  }
  
  // Calculate the base pay for both day and night shifts
  basePay = (totalDayWorkedHours * payRateDay) + (totalNightWorkedHours * payRateNight);
  
  // Calculate the weighted pay rate based on total hours worked
  weightedPayRate = basePay / totalWorkedHours;
  
  // Calculate the overtime pay rate based on the weighted pay rate and federal rate
  overtimePayRate = weightedPayRate * federalRate;
  
  // Calculate the total overtime pay
  overtimePay = overtimePayRate * totalOvertimeHours;
  
  // Adjust base pay if there are overtime hours
  if (totalWorkedHours > maxBaseHours) {
    basePay = regularHours * weightedPayRate;
  }
  
  // Calculate the total pay for the week, including base pay and overtime pay
  totalPayWeek = basePay + overtimePay;
  
  // Output the employee payroll summary
  console.log(`
    Employee Payroll Summary:
    --------------------------
    - Shift Type: ${(dayShift && nightShift) ? 'Day Shift + Night Shift' : dayShift ? 'Day Shift' : 'Night Shift'}
    - Regular Day Pay Rate: $${payRateDay}/hour
    - Regular Night Pay Rate: $${payRateNight}/hour
    - Regular Weighted Pay Rate: $${weightedPayRate.toFixed(2)}/hour
    - Regular Hours Worked: ${regularHours} hours
    - Regular Earnings: $${basePay.toFixed(2)}
    - Overtime Hours Worked: ${totalOvertimeHours} hours
    - Overtime Pay Rate: $${overtimePayRate.toFixed(2)}/hour
    - Overtime Earnings: $${overtimePay.toFixed(2)}
    --------------------------
    - Total Weekly Earnings: $${totalPayWeek.toFixed(2)}
  `);
} else {
  console.warn('Invalid Credentials');
}

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


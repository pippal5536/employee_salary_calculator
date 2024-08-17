// Input data
let totalDayWorkedHours = 0;
let totalNightWorkedHours = 10;

// // Constants and variable declarations
let dayShift = totalDayWorkedHours > 0;
let nightShift = totalNightWorkedHours > 0;
const payRateDay = 10;
const payRateNight = 12;
const federalRate = dayShift && nightShift ? 0.5 : 1.5;
const maxBaseHours = 40;
const workLimitHours = 60;
let totalWorkedHours = totalDayWorkedHours + totalNightWorkedHours;
let regularHours, totalOvertimeHours, weightedPayRate;
let basePay, overtimePayRate, overtimePay, totalPayWeek;

if (dayShift && nightShift) {
  // Case 1: Total hours worked do not exceed the maximum regular hours, and day shift hours are greater than or equal to night shift hours. No overtime.
  // Case 2: Total hours worked do not exceed the maximum regular hours, and night shift hours are greater than day shift hours. No overtime.
  // Case 3: Total hours worked do not exceed the maximum regular hours, and day shift hours equal night shift hours. No overtime.
  // Case 4: Total hours worked exceed the maximum regular hours but are within the weekly work limit. Day shift hours are greater than night shift hours.
  // Case 5: Total hours worked exceed the maximum regular hours but are within the weekly work limit. Night shift hours are greater than day shift hours.
  // Case 6: Total hours worked exceed the maximum regular hours but are within the weekly work limit. Day shift hours equal night shift hours.

  if (
    (totalDayWorkedHours >= totalNightWorkedHours ||
      totalDayWorkedHours <= totalNightWorkedHours) &&
    totalWorkedHours <= maxBaseHours
  ) {
    // No overtime, all hours are regular hours
    regularHours = totalWorkedHours;
    totalOvertimeHours = 0;
  } else if (
    totalDayWorkedHours > totalNightWorkedHours &&
    totalDayWorkedHours <= maxBaseHours &&
    totalWorkedHours > maxBaseHours &&
    totalWorkedHours <= workLimitHours
  ) {
    // Day shift hours exceed night shift hours, and total hours worked exceed max regular hours
    totalNightWorkedHours = maxBaseHours - totalDayWorkedHours;
    regularHours = totalDayWorkedHours + totalNightWorkedHours;
    totalOvertimeHours = totalWorkedHours - regularHours;
  } else if (
    totalDayWorkedHours < totalNightWorkedHours &&
    totalNightWorkedHours <= maxBaseHours &&
    totalWorkedHours > maxBaseHours &&
    totalWorkedHours <= workLimitHours
  ) {
    // Night shift hours exceed day shift hours, and total hours worked exceed max regular hours
    totalDayWorkedHours = maxBaseHours - totalNightWorkedHours;
    regularHours = totalDayWorkedHours + totalNightWorkedHours;
    totalOvertimeHours = totalWorkedHours - regularHours;
  } else if (
    totalDayWorkedHours === totalNightWorkedHours &&
    totalWorkedHours > maxBaseHours &&
    totalWorkedHours <= workLimitHours
  ) {
    // Day and night shift hours are equal, and total hours worked exceed max regular hours
    totalOvertimeHours = totalWorkedHours - maxBaseHours;
    totalDayWorkedHours = 0.5 * maxBaseHours;
    totalNightWorkedHours = 0.5 * maxBaseHours;
    totalWorkedHours = totalDayWorkedHours + totalNightWorkedHours;
    regularHours = totalWorkedHours;
  }
} else if (dayShift || nightShift) {
  // Case 1: Only worked in day/night shift but did not exceed max regular hours.
  // Case 2: Only worked in day/night shift but exceeded max regular hours.
  if (totalWorkedHours <= maxBaseHours) {
    regularHours = totalWorkedHours;
    totalOvertimeHours = 0;
  } else if (
    totalWorkedHours > maxBaseHours &&
    totalWorkedHours <= workLimitHours
  ) {
    totalOvertimeHours = totalWorkedHours - maxBaseHours;
    regularHours = totalWorkedHours - totalOvertimeHours;
  }
}

// Determine base pay for day or night shifts or both
basePay =
  dayShift && nightShift
    ? totalDayWorkedHours * payRateDay + totalNightWorkedHours * payRateNight
    : dayShift
    ? regularHours * payRateDay
    : nightShift
    ? regularHours * payRateNight
    : 0;

// Determine weighted pay rate for overtime pay rate
weightedPayRate = basePay / regularHours;

// Determine over time pay rate for day or night shifts or both
overtimePayRate = weightedPayRate * federalRate;

// Determine overtime pay
overtimePay = overtimePayRate * totalOvertimeHours;

// Determine weekly payment
totalPayWeek = overtimePay + basePay;

// Logging output and error handlings
let isNegativeInput = totalDayWorkedHours < 0 || totalNightWorkedHours < 0;
let isZeroInput = Math.max(totalDayWorkedHours, totalNightWorkedHours) === 0;
let isHighvalueinput =
  totalDayWorkedHours > workLimitHours ||
  totalNightWorkedHours > workLimitHours;
let isStringInput =
  typeof totalDayWorkedHours == "string" ||
  typeof totalNightWorkedHours == "string";

if (isNegativeInput) {
  console.error(
    "Invalid input: Negative numbers are not permitted. Please provide a non-negative value."
  );
} else if (isZeroInput) {
  console.error(
    "It appears that no hours were worked this week. If this is an error, please update your timesheet accordingly."
  );
} else if (isHighvalueinput) {
  console.error(
    "Error: The reported work hours are exceptionally high. Please verify the entries for accuracy and resubmit if needed."
  );
} else if (isStringInput) {
  console.error(
    "Invalid input: A string was provided where a number is required. Please check your input and try again."
  );
} else {
  console.log(`
    Employee Weekly Payroll Summary:
    --------------------------
    - Shift Type: ${
      dayShift && nightShift
        ? "Day Shift + Night Shift"
        : dayShift
        ? "Day Shift"
        : "Night Shift"
    }
    - Regular Day Pay Rate: $${payRateDay.toFixed(2)}/hour
    - Regular Night Pay Rate: $${payRateNight.toFixed(2)}/hour
    - Regular Weighted Pay Rate: $${weightedPayRate.toFixed(2)}/hour
    - Regular Hours Worked: ${regularHours.toFixed(2)} hours
    - Regular Earnings: $${basePay.toFixed(2)}
    - Overtime Hours Worked: ${totalOvertimeHours.toFixed(2)} hours
    - Overtime Pay Rate: $${overtimePayRate.toFixed(2)}/hour
    - Overtime Earnings: $${overtimePay.toFixed(2)}
    --------------------------
    - Total Weekly Earnings: $${totalPayWeek.toFixed(2)}
  `);
}

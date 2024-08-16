**Title:** Input Huge Number for Day

**Test Case ID:** TC002

**Description:** This test case validates the input variables with very high values.

**Preconditions:**

- User inputed a huge number.

**Test Steps:**

1. Set `totalDayWorkedHours` to a high value 999.
2. Run the program.

**Expected Results:**

The program should output an error message to the console.

**Actual Results:**

- The program did not show an error message.

**Status:** Failed

**Comments/Notes:**

- No Error functionalities for higher values.
- Weighted pay rate showing very high.

**Root Cause Analysis:**

- No validations for higher values.
- Weighted pay rate is unrealisticly high for higher values.
- It seems the program is calculating `totalPayWeek` even though `dayShift = false` and `totalDayWorkedHours = 999`.
- No manual input for overtime hours.

**Fix Implemented:**

- Capped `totalDayWorkedHours` to `workLimithours` as well as showing 'company policy' for weekly work limit.

```
if (totalDayWorkedHours > workLimitHours) {
  totalDayWorkedHours = workLimitHours;
  console.warn('Employee exceeded work limit');
}
```

**Code Changes:**

- Inserted validation logic at the beginning of the script to check for negative inputs.
- Added an error message output for cases where negative inputs are detected.

**Actual Results (After Fix):**

- The program correctly identified the negative input and outputted the error message: "Error: Worked hours cannot be negative."
- The calculation was not performed, adhering to the expected behavior.

**Status:** Passed

**Comments/Notes:**

- After applying the fix, the test case passed successfully.
- The program now correctly handles negative inputs and prevents further calculations in such cases.

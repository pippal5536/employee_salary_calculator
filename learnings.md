1. reducing redundant Code:

from

```
if ((totalWorkedHours > maxBaseHours) && (totalWorkedHours <= workLimitHours)) {

  totalOvertimeHours = totalWorkedHours - maxBaseHours;

} else if (totalWorkedHours > workLimitHours) {
  totalWorkedHours = workLimitHours;
  totalOvertimeHours = workLimitHours - maxBaseHours;
  console.warn(`Since the employee exceeded the work limit, regular hours will be capped at ${maxBaseHours}, with the remaining ${totalOvertimeHours} hours classified as overtime.`);
} else {
  totalOvertimeHours = 0;
}
```

TO

```
totalOvertimeHours = Math.max(0, totalWorkedHours - maxBaseHours);
if (totalWorkedHours > workLimitHours) {
  totalWorkedHours = workLimitHours;
  totalOvertimeHours = workLimitHours - maxBaseHours;
  console.warn(`Since the employee exceeded the work limit, regular hours will be capped at ${maxBaseHours}, with the remaining ${totalOvertimeHours} hours classified as overtime.`);
}
```

# Weekly Payroll Calculation System

## Table of Contents

1. [Introduction](#introduction)
2. [Project Problem](#project-problem)
3. [Solution Overview](#solution-overview)
4. [Challenges Faced](#challenges-faced)
5. [Lessons Learned](#lessons-learned)
6. [Project Sources and Inspiration](#project-sources-and-inspiration)
7. [Technologies Used](#technologies-used)
8. [Installation and Usage](#installation-and-usage)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact Information](#contact-information)

## Introduction

The Weekly Payroll Calculation System is a tool designed to compute weekly payroll based on worked hours for day and night shifts. It calculates both regular and overtime pay, taking into account different pay rates for day and night shifts. The system ensures accurate payroll processing and handles various cases of work hours and shift combinations.

## Project Problem

Managing payroll can be complex, especially when dealing with different shifts and overtime calculations. The problem addressed by this project is the accurate computation of weekly payroll considering:

- Different pay rates for day and night shifts.
- Regular and overtime hours.
- Constraints on maximum base hours and total work limits.

## Solution Overview

The solution provides a JavaScript-based payroll calculation system that:

- Takes input for day and night shift hours.
- Computes regular and overtime hours based on predefined limits.
- Calculates the total pay including both regular and overtime earnings.
- Handles various edge cases such as negative input, zero input, and excessively high values.

**Key Features:**

- Accurate calculation of regular and overtime pay.
- Dynamic adjustment of regular hours based on shift types and overtime.
- Detailed logging and error handling for invalid inputs.

## Challenges Faced

During the development of this project, the following challenges were encountered:

- **Handling Different Shift Scenarios:** Ensuring that the system correctly calculates hours and pay for various combinations of day and night shifts.
- **Managing Overtime Calculation:** Implementing the logic to differentiate between regular and overtime hours, especially when work hours exceed the maximum base hours.
- **Input Validation:** Creating robust checks for invalid inputs such as negative values or excessively high work hours.

## Lessons Learned

- **Improved JavaScript Skills:** Enhanced understanding of JavaScript for handling complex calculations and input validations.
- **Better Problem-Solving Strategies:** Learned to handle various edge cases and create comprehensive error messages.
- **Code Organization:** Gained insights into organizing code for readability and maintainability.

## Project Sources and Inspiration

This project was inspired by common payroll management systems and online resources about shift-based work and overtime calculations. Key sources include:

- Online JavaScript tutorials.
- Payroll management best practices.

## Technologies Used

- **Programming Language:** JavaScript
- **Libraries/Tools:** None specific, pure JavaScript used
- **Version Control:** Git

## Installation and Usage

To set up and use the Weekly Payroll Calculation System, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/pippal5536/employee_salary_calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd employee_salary_calculator/src
   ```
3. Open the `index.js` file under the src folder.
4. Run the file using node:

   ```bash
   node index.js
   ```

**Example Usage:**
Modify the `totalDayWorkedHours` and `totalNightWorkedHours` variables in the script to test different scenarios and view the computed payroll summary in the console.

## Contributing

Contributions are welcome! To contribute to this project:

- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes and commit (`git commit -am 'Add new feature'`).
- Push to the branch (`git push origin feature-branch`).
- Create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Information

For any further queries or feedback, feel free to contact me:

- **Email:** [pippaljob0@gmail.com](mailto:pippaljob0@gmail.com)
- **LinkedIn:** [oishik-biswas](https://www.linkedin.com/in/oishik-biswas/)
- **GitHub:** [pippal5536](https://github.com/pippal5536)

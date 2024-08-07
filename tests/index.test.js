const calculatePay = require('../src/index');

test('Regular hours, no overtime', () => {
  expect(calculatePay(40, 15, 1.5)).toBe(600);
});

test('With overtime', () => {
  expect(calculatePay(50, 15, 1.5)).toBe(825);
});

test('Negative hours should throw error', () => {
  expect(() => calculatePay(-5, 15, 1.5)).toThrow("Hours worked cannot be negative");
});

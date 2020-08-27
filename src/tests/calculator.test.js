import calculator from '../modules/calculator';

test('Simple Addition of ints.', () => {
  expect(calculator.add(3, 5)).toEqual(8);
});

test('Simple Addition of Floats.', () => {
  expect(calculator.add(3.5, 5.5)).toBeCloseTo(9);
});

test('Simple Subtraction of Floats.', () => {
  expect(calculator.subtract(35.5, 5.5)).toEqual(30);
});

test('Simple Subtraction of ints.', () => {
  expect(calculator.subtract(5, 3)).toEqual(2);
});

test('Simple Multiplication of ints.', () => {
  expect(calculator.multiply(5, 3)).toEqual(15);
});

test('Simple Multiplication of Floats.', () => {
  expect(calculator.multiply(10, 0.5)).toEqual(5);
});

test('Simple Division of ints.', () => {
  expect(calculator.divide(6, 3)).toEqual(2);
});

test('Simple Division of Floats.', () => {
  expect(calculator.divide(1, 0.5)).toEqual(2);
});

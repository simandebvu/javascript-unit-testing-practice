import reverseString from '../modules/reverseString';

test('All lower case.', () => {
  expect(reverseString('shingi')).toBe('ignihs');
});

test('All upper case.', () => {
  expect(reverseString('SHINGI')).toBe('IGNIHS');
});

test('Mixed Casing.', () => {
  expect(reverseString('ShInGI')).toBe('IGnIhS');
});

test('Numbers to String', () => {
  expect(reverseString((99).toString())).toBe('99');
});
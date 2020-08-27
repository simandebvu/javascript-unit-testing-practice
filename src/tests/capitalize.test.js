import capitalize from '../modules/capitalize';

test('All lower case.', () => {
  expect(capitalize('shingi')).toBe('Shingi');
});

test('All upper case.', () => {
  expect(capitalize('SHINGI')).toBe('Shingi');
});

test('Mixed Casing.', () => {
  expect(capitalize('ShInGI')).toBe('Shingi');
});

test('Rejects non string input.', () => {
  expect(capitalize(99)).toBe('');
});
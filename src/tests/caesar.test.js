import caesarCipher from '../modules/caesar';

test('One word. All lowercase.', () => {
  expect(caesarCipher('shingi', 5)).toBe('xmnsln');
});

test('Multiple words. All lowercase.', () => {
  expect(caesarCipher('bender is great', 10)).toBe('loxnob sc qbokd');
});

test('Large key', () => {
  expect(caesarCipher('Hello World!', 53251)).toBe('Hhoor Wruog!');
});
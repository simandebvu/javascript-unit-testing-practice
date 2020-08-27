import analyze from '../modules/analyse';

test('Gets average', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toEqual(4);
});

test('Gets minimum value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toEqual(1);
});

test('Full object', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
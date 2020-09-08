/* eslint-disable no-undef */
import numberRange from './numberRange';

it('Produces number in range', () => {
  const high = 10;
  const low = 1;

  const sut = numberRange(1, 10);

  const result = sut();

  expect(result).toBeLessThanOrEqual(high);
  expect(result).toBeGreaterThanOrEqual(low);
});

it('disallows invalid range', () => {
  expect(numberRange.bind(undefined, 5, 4)).toThrow();
});

/* eslint-disable no-undef */
import normalinv from './normalinv';

it('returns mean for .5', () => {
  const mean = 100;
  const result = normalinv(0.5, mean, 50);

  expect(result).toBe(mean);
});

it('returns mean + std for 0.84135', () => {
  const mean = 100;
  const std = 10;

  const result = normalinv(0.84135, mean, std);

  expect(result).toBeCloseTo(mean + std, 3);
});

it('returns mean + 2std for 0.97725', () => {
  const mean = 100;
  const std = 10;

  const result = normalinv(0.97725, mean, std);

  expect(result).toBeCloseTo(mean + 2 * std, 3);
});

it('returns mean + 3std for 0.99865', () => {
  const mean = 100;
  const std = 10;

  const result = normalinv(0.99865, mean, std);

  expect(result).toBeCloseTo(mean + 3 * std, 3);
});

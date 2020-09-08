/* eslint-disable no-undef */
import timed from './timed';

it('calls callback function', () => {
  const callback = jest.fn(() => 1);

  timed(callback)();
  expect(callback).toBeCalled();
});

it('returned timed result tuple', () => {
  const callback = jest.fn(() => 1);

  const result = timed(callback)();
  expect(result[0]).toBe(1);
  expect(result[1]).toBeGreaterThanOrEqual(0);
});

import bulkRunner from './bulkRunner';

const callTimes = 10;
const sut = bulkRunner(callTimes);

/* eslint-disable no-undef */
it('invokes callback', () => {
  const callback = jest.fn(() => undefined);

  sut(callback);

  expect(callback).toBeCalledTimes(callTimes);
});

it('collects results', () => {
  const callback = () => 1;

  const results = sut(callback);

  expect(results.length).toBe(10);
  expect(results[4]).toBe(1);
});

it('does not allow negative iterations', () => {
  expect(bulkRunner.bind(undefined, -1)).toThrow();
});

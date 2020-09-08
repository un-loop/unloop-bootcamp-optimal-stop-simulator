/* eslint-disable no-undef */
import normalDistribution from './normalDistribution';

it('returns values', () => {
  const sut = normalDistribution(1, 1);

  const mock = jest.fn(sut);
  mock();
  mock();
  mock();
  mock();

  expect(mock).toHaveReturnedTimes(4);
});

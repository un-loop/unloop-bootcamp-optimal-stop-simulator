import simulator from './simulator';

/* eslint-disable no-undef */
const defaultSize = 10;
type ValueObj = {
  value: number;
};

const getConfig = (acceptTardy = false, size = defaultSize) => ({
  size: size,
  timelyRejections: 0,
  tardyRejections: acceptTardy ? 0 : 1,
});

const getIncFactory = () => {
  let iteration = 0;

  return {
    comparer: jest.fn(
      (first: ValueObj, second: ValueObj) => first.value - second.value
    ),
    factory: jest.fn(() => ({ value: ++iteration })),
  };
};

it('can accept first', () => {
  const config = getConfig();
  const { comparer, factory } = getIncFactory();

  const betterThan = simulator(
    (iterator, accept) => {
      const value = iterator.next();
      accept(value.value);
    },
    factory,
    comparer,
    config
  );

  expect(betterThan).toBe(9);
  expect(factory).toBeCalledTimes(10);
});

it('can hold, then accept', () => {
  const config = getConfig(true);
  const { comparer, factory } = getIncFactory();

  let accepted = false;
  const betterThan = simulator(
    (iterator, accept, hold) => {
      const value = iterator.next();
      hold(value.value);
      iterator.next();
      accepted = accept(value.value);
    },
    factory,
    comparer,
    config
  );

  expect(accepted).toBe(true);
  expect(betterThan).toBe(9);
});

it('can accept last', () => {
  const config = getConfig();
  const { comparer, factory } = getIncFactory();

  let accepted = false;
  const betterThan = simulator(
    (iterator, accept) => {
      let value: IteratorResult<ValueObj> = iterator.next();
      let hold = value.value;
      while (!value.done) {
        hold = value.value;
        value = iterator.next();
      }

      accepted = accept(hold);
    },
    factory,
    comparer,
    config
  );

  expect(accepted).toBe(true);
  expect(betterThan).toBe(0);
});

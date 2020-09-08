import { SimCallback, ItemComparer } from './types';
import { ItemIterator } from './ItemIterator';

export const defaultConfig = {
  size: 1000,
  timelyRejections: 0,
  tardyRejections: 1,
};

const simulator = <T>(
  callback: SimCallback<T>,
  factory: () => T,
  comparer: ItemComparer<T>,
  config = defaultConfig
) => {
  const pool = new Array<T>(config.size);
  for (let i = 0; i < config.size; i++) {
    pool[i] = factory();
  }

  const iterator = new ItemIterator(pool);
  let accepted: T | undefined = undefined;

  const held = new Set<T>();

  const accept = (item: T) => {
    if (accepted !== undefined) {
      return false;
    }

    const random = Math.random();
    const result = held.has(item)
      ? random >= config.tardyRejections
      : random >= config.timelyRejections;

    if (result) {
      accepted = item;
    }

    return result;
  };

  const hold = (item: T) => {
    held.add(item);
  };

  callback(iterator, accept, hold);

  if (accepted === undefined) {
    throw new Error('no candidate accepted');
  }

  return pool.reduce<number>(
    (better, val) => (comparer(accepted as T, val) < 0 ? better + 1 : better),
    0
  );
};

export default simulator;

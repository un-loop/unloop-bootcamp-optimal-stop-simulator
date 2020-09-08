import { ItemIterator } from '../ItemIterator';

type SimCallback<T> = (
  iterator: ItemIterator<T>,
  accept: (item: T) => boolean,
  hold: (item: T) => void
) => void;

// eslint-disable-next-line no-undef
export default SimCallback;

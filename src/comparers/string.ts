import { ItemComparer, StringConvertable } from '../types';

const stringComparer: ItemComparer<StringConvertable> = (first, second) => {
  const firstString = first.toString();
  const secondString = second.toString();

  if (firstString === secondString) {
    return 0;
  }

  return firstString < secondString ? -1 : 1;
};

export default stringComparer;

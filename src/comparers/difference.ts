import { ItemComparer } from '../types';

const difference: ItemComparer<number> = (first, second) => second - first;
export default difference;

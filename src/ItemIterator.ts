export class ItemIterator<T> implements Iterator<T> {
  private _data: T[];
  private _index = -1;

  constructor(data: T[]) {
    this._data = data;
  }

  public next(): IteratorResult<T> {
    return this._index < this._data.length - 1
      ? {
          done: false,
          value: this._data[++this._index],
        }
      : {
          done: true,
          value: undefined,
        };
  }
}

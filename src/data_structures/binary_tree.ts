export class BinaryTree<T> {
  values: T[] = [];
  length: number = 0;

  // O(1)
  append(value: T) {
    this.values.push(value);
    ++this.length;
  }

  // O(n)
  search(value: T) {
    for (let i = 0; i < this.length; ++i) {
      if (value === this.values[i]) {
        return i;
      }

      return -1;
    }
  }
}

export class BinaryTree<T> {
  values: T[] = [];
  length: number = 0;

  append(value: T) {
    this.values[this.length] = value;
    ++this.length;
  }
}

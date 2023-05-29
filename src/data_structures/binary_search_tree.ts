export class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export class BinarySearchTree<T> {
  rootNode: Node<T> | null;
  length: number;

  constructor() {
    this.rootNode = null;
    this.length = 0;
  }

  // O(1)
  append(value: T) {
    if (!this.rootNode) {
      this.rootNode = new Node(value);
      return;
    }

    this.attachNode(this.rootNode, value);
  }

  // O(n)
  search(value: T) { }

  attachNode(node: Node<T>, value: T) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value)
      }
      else {
        this.attachNode(node.left, value)
      }
    }
    else {
      if (!node.right) {
        node.right = new Node(value)
      }
      else {
        this.attachNode(node.right, value)
      }
    }
  }
}

"use client";
import { BinarySearchTree, Node } from "@/data_structures/binary_search_tree";
import { useRef, useEffect, useState } from "react";

const generateVisualNodes = <T,>(
  node: Node<T> | null,
  visualNodes: (T | string)[][],
  depth: number = 0,
  index: number = 0
) => {
  if (!node) {
    return;
  }

  if (!visualNodes[depth]) {
    visualNodes[depth] = Array(2 ** depth).fill("X");
  }

  visualNodes[depth][index - (2 ** depth - 1)] = node.value;

  ++depth;
  generateVisualNodes(node.left, visualNodes, depth, 2 * index + 1);
  generateVisualNodes(node.right, visualNodes, depth, 2 * index + 2);
};

export default function BinarySearchTreePage() {
  const canvasRef = useRef(null);
  const [visualNodes, setVisualNodes] = useState<number[][]>([]);

  useEffect(() => {
    const binaryTree = new BinarySearchTree<number>();
    binaryTree.append(1);
    binaryTree.append(2);
    binaryTree.append(3);
    binaryTree.append(2);
    binaryTree.append(3);
    binaryTree.append(3);
    binaryTree.append(3);
    binaryTree.append(-1);
    generateVisualNodes(binaryTree.rootNode, visualNodes);
    setVisualNodes(visualNodes.map((nodeArrays) => [...nodeArrays]));
    console.log(visualNodes);
  }, [canvasRef]);

  return (
    <main>
      // <canvas ref={canvasRef}></canvas>
      <div className="flex flex-col gap-2">
        {visualNodes.map((nodeArray, i) => (
          <div key={i} className="flex justify-center " style={{ gap: `${visualNodes.length - i}rem` }}>
            {nodeArray.map((value, j) => (
              <div
                key={j}
                className="flex w-8 h-8 bg-cyan-500 rounded-full items-center justify-center"
              >
                {String(value)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

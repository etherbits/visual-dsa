"use client";
import { BinarySearchTree, Node } from "@/data_structures/binary_search_tree";
import { useRef, useEffect, useState } from "react";

const generateVisualNodes = <T,>(
  node: Node<T> | null,
  visualNodes: (T | null)[][],
  depth: number = 0,
  index: number = 0
) => {
  if (!node) {
    return;
  }

  if (!visualNodes[depth]) {
    visualNodes[depth] = Array(2 ** depth).fill(null);
  }

  visualNodes[depth][index - (2 ** depth - 1)] = node.value;

  ++depth;
  generateVisualNodes(node.left, visualNodes, depth, 2 * index + 1);
  generateVisualNodes(node.right, visualNodes, depth, 2 * index + 2);
};

export default function BinarySearchTreePage() {
  const canvasRef = useRef(null);
  const [visualNodes, setVisualNodes] = useState<(number | null)[][]>([]);

  useEffect(() => {
    const binaryTree = new BinarySearchTree<number>();
    binaryTree.append(1);
    binaryTree.append(2);
    binaryTree.append(3);
    binaryTree.append(2);
    binaryTree.append(3);
    binaryTree.append(3);
    binaryTree.append(-1);
    generateVisualNodes(binaryTree.rootNode, visualNodes);
    setVisualNodes(visualNodes.map((nodeArrays) => [...nodeArrays]));
    console.log(visualNodes);
  }, [canvasRef]);

  const nodeRadius = 32;
  const maxLen = visualNodes.at(-1)?.length ?? 0;
  const width = 2 * nodeRadius * maxLen + 32 * (maxLen - 1);
  return (
    <main>
      <canvas ref={canvasRef}></canvas>

      <div className="flex flex-col gap-2">
        {visualNodes.map((nodeArray, i) => (
          <div
            key={i}
            className="flex justify-between"
            style={{
              width: `${width}px`,
              margin: "0 auto",
              padding: `0 ${(width - nodeRadius) / (2 * 2 ** i)}px`,
            }}
          >
            {nodeArray.map((value, j) => (
              <div
                key={j}
                className="flex w-8 h-8 bg-cyan-500 rounded-full items-center justify-center"
                style={{ opacity: `${nodeArray[j] === null ? 0 : 1}` }}
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

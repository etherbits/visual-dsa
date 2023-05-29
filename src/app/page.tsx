import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-4xl mb-12 font-bold">
        Data structures and algorithms
      </h1>
      <h2 className="text-3xl font-medium mb-2">trees</h2>
      <h4 className="text-xl ml-6 font-medium">Data Structures</h4>
      <ul className="ml-12 mb-6">
        <li>
          <Link href="/binary-search-tree" className="text-blue-500">
            Binary Search Tree
          </Link>
        </li>
      </ul>
      <h4 className="text-xl ml-6 font-medium">Algorithms</h4>
      <ul className="ml-12">
        <li>
          <Link href="/tree-traversal" className="text-blue-500">
            Tree Traversal
          </Link>
        </li>
      </ul>
    </main>
  );
}

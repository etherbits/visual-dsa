"use client";
import { useRef, useEffect } from 'react'

export default function TreeTraversal() {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(canvasRef.current)
  }, [canvasRef])

  return <main>
    <canvas ref={canvasRef}></canvas>
  </main>
}

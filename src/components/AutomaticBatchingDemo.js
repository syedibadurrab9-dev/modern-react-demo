import React, { useState } from "react";

export default function AutomaticBatchingDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = () => {
    // ✅ In React 17, this caused 2 re-renders
    // ✅ In React 18, React AUTOMATICALLY batches them → only 1 re-render
    setCount((c) => c + 1);
    setText("Updated!");
  };

  return (
    <div className="card">
      <h2>⚡ Automatic Batching</h2>
      <p>Count: {count}, Text: {text}</p>
      <button onClick={handleClick}>Update Both</button>
      <small>Both state updates are batched → single re-render</small>
    </div>
  );
}

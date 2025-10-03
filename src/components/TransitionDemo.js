import React, { useState, useTransition } from "react";

export default function TransitionDemo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // ✅ Mark expensive state update as "non-urgent"
    startTransition(() => {
      const newList = Array(20000).fill(value); // heavy list generation
      setList(newList);
    });
  };

  return (
    <div className="card">
      <h2>⏳ useTransition</h2>
      <input value={input} onChange={handleChange} placeholder="Type here..." />
      {isPending && <p>Loading big list...</p>}
      <p>List length: {list.length}</p>
      <small>UI stays responsive while large list updates</small>
    </div>
  );
}

import React, { useState, useDeferredValue } from "react";

export default function DeferredValueDemo() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query); // ✅ defers non-urgent update

  // Simulate filtering a huge list
  const list = Array(10000).fill("React").map((item, i) => `${item} ${i}`);
  const filtered = list.filter((item) => item.includes(deferredQuery));

  return (
    <div className="card">
      <h2>⌛ useDeferredValue</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter large list"
      />
      <p>Results: {filtered.length}</p>
      <small>
        Query updates immediately, filtering is deferred → smoother UI.
      </small>
    </div>
  );
}

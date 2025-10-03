import React, { Suspense } from "react";

// Fake async data loader
const fetchData = () =>
  new Promise((resolve) => setTimeout(() => resolve("✅ Data loaded!"), 2000));

// Wrap Promise into a Suspense "resource"
function createResource(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    }
  };
}

const resource = createResource(fetchData());

function DataComponent() {
  const data = resource.read(); // Suspense will "pause" until resolved
  return <p>{data}</p>;
}

export default function SuspenseDemo() {
  return (
    <div className="card">
      <h2>🌀 Suspense for Data Fetching</h2>
      {/* ✅ Suspense shows fallback until data is ready */}
      <Suspense fallback={<p>Loading data...</p>}>
        <DataComponent />
      </Suspense>
      <small>Suspense simplifies async data UI</small>
    </div>
  );
}

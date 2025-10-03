import React from "react";
import AutomaticBatchingDemo from "./components/AutomaticBatchingDemo";
import TransitionDemo from "./components/TransitionDemo";
import DeferredValueDemo from "./components/DeferredValueDemo";
import SuspenseDemo from "./components/SuspenseDemo";

export default function App() {
  return (
    <div className="container">
      <h1>🔵 Modern React (17 → 18+)</h1>

      {/* ✅ Automatic Batching */}
      <AutomaticBatchingDemo />

      {/* ✅ useTransition */}
      <TransitionDemo />

      {/* ✅ useDeferredValue */}
      <DeferredValueDemo />

      {/* ✅ Suspense for Data Fetching */}
      <SuspenseDemo />
    </div>
  );
}

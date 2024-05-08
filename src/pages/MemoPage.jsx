import { useState } from "react";
import Layout from "../layouts";
import { UseMemo } from "../hooks/useMemo";

export default function Memo() {
  
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="flex justify-between items-center flex-col py-4 space-y-2">
        <h2>Main component rendered</h2>
        {count}
        <button className="p-2 rounded-sm bg-cyan-600" onClick={() => setCount(count + 1)}>Update State</button>
        <UseMemo />
      </div>
    </Layout>
  );
}

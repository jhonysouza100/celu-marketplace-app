import { useState } from "react";
import { UseCallback } from "../hooks/useCallback";
import Layout from "../layouts";

export default function Callback() {

  const [count, setCount] = useState(0);

  console.log('callback PAGE rendered')

  return (
    <Layout>
    <div className="flex justify-between items-center flex-col py-4 space-y-2">
      <h2>Main component rendered</h2>
      {count}
      <button className="p-2 rounded-sm bg-cyan-600" onClick={() => setCount(count + 1)}>Update State</button>
      <UseCallback />
    </div>
  </Layout>
  );
}
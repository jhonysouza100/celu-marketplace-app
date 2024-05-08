import { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../layouts";

export default function LayoutEffectPage() {

  const [count, setCount] = useState(100);

  
  useLayoutEffect(() => {
    
    console.log('(useLayoutEffect)component PAGE did mount')
    
    return () => {
      console.log('(useLayoutEffect)component PAGE will unmount')
    }
    
  }, []);
  
  useEffect(() => {
    
    console.log('(useEffect)component PAGE did mount')

    return () => {
      console.log('(useEffect)component PAGE will unmount')
    }
    
  }, []);

  useEffect(() => {
    console.log('component did update')
  })
  
  
  console.log('component PAGE rendered')

  return (
    <Layout>
      <div className="p-2 text-center space-y-1 flex flex-col items-center justify-center">
        <h3>useLayoutEffect()</h3>
        <p>Se ejecuta ANTES de que se renderice el componente</p>
        <h3>useEffect()</h3>
        <p>Se ejecuta DESPUES de que se renderice el componente</p>
        <button className="p-2 bg-cyan-600 rounded-sm" onClick={() => setCount(count + 1)}>Update {count}</button>
        <h3>Effect sin parametro []</h3>
        <p>{'useEffect(() => componentDidUpdate )'}</p>
        <p>Se renderiza siempre que el estado cambia, o una sola ves si este esta vacio</p>
        <h3>Effect con return</h3>
        <p>{'useEffect(() => return () => componentWillUnmount )'}</p>
        <p>Se renderiza siempre que el componente se desmonta</p>
      </div>
    </Layout>
  );
}

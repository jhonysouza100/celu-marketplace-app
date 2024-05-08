import { useRef } from "react";
import Layout from "../layouts";

export default function RefPage() {

  const inputRef = useRef(2);

  console.log("render component");

  const handleClick = () => {
    alert(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <Layout>
      <div className="bg-zinc-700 text-white flex items-center justify-center flex-col p-2 space-y-2">
        <p>UseRef</p>
        <input
          ref={inputRef}
          className="rounded-sm text-zinc-700"
          type="text"
        />
        <button className="bg-cyan-700 p-2 rounded-sm" onClick={handleClick}>
          useRef
        </button>
        <p>{'useRef(), se usa para hacer "REFERENCIA A UN COMPONENTE"'}</p>
      </div>
    </Layout>
  );
}

import { useCallback, useContext, useState } from "react";
import { AppContext } from "../context";

export const UseCallback = () => {

  console.log("component CHILD rendered")

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const {authenticated, handleAuthenticated} = useContext(AppContext)

  function calculateNumber() {

    console.log("function calculate");

    setNumber(number + 1);

  }

  const memoCalculateNumber = useCallback(() => calculateNumber(), []);

  const memoAuth = useCallback(() => handleAuthenticated(), [authenticated])

  return (
    <div className="w-full p-2">
      <hr />
      <div className="flex-col items-center justify-center flex space-y-2 p-2">
        <button className="bg-emerald-700 p-2 rounded-md" onClick={memoAuth}>Auth</button>
        <p>{`is Auth: ${authenticated? "TRUE" : "FALSE"}`}</p>
      </div>
      <hr />
      <p>El componente hijo se renderiza</p>
      <h2>ESTADO: <span className="text-lime-600">{number}</span></h2>
      <button className="bg-rose-600 p-2 rounded-sm" onClick={memoCalculateNumber}>Update Callback State</button>
      <p>La funcion se puede volver a ejecutar pero el ESTADO no cambia</p>
      <button className="bg-purple-600 p-2 rounded-sm my-2" onClick={() => setCount(count + 1)}>Update Child State and render</button>
      <br />
      <div className="bg-zinc-800 p-2 rounded-md text-yellow-600">
        {
          'const [number, setNumber] = useState(0);'
        }
      </div>
      <br />
      <div className="bg-zinc-800 p-2 rounded-md text-yellow-600">
        {
          'function calculateNumber() {\nconsole.log("Calculate");\nsetNumber(number + 1);`\n}'
        }
      </div>
      <br />
      <div className="bg-zinc-800 p-2 rounded-md text-yellow-600">
        {
          'const memoCalculateNumber = useCallback(() => calculateNumber(), [])'
        }
      </div>

    </div>
  );
};

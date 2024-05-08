import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";

export default function ChildComponents() {

  const {isAuth, setIsAuth} = useContext(AppContext)
  const [count, setCount] = useState(0)

  useEffect(() => {

    console.log("component did mount")

    return () => {
      console.log("component will unmount")
    }
  }, [count])


  console.log("renderizado HIJO")

  return (
    <div className="p-2 w-full space-y-2 flex justify-center flex-col items-center">
      <p>Componente Hijo: NO afecta el componente padre</p>
      <div className="flex justify-center flex-col items-center space-y-1">
        <p>{count}</p>
        <button className="bg-rose-700 p-2 rounded-md" onClick={() => setCount(count + 1)}>Count</button>
      </div>
      <p>El estado en el contexto afecta a toda la app, si este cambia, se vulve a renderizar toda la app</p>
      <div className="flex justify-center items-center flex-col space-y-1">
        <button className="bg-cyan-700 p-2 rounded-md" onClick={() => setIsAuth(!isAuth)}>Auth</button>
        <p>Autenticated = {isAuth ? 'TRUE' : 'FALSE'}</p>
      </div>
    </div>
  );
}
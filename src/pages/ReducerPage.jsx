import { useReducer } from "react";
import Layout from "../layouts";

const initialState = {count: 0};

export function Reducer(state, action){

  switch(action.type) {
    case "INCREMENT":
      return {count: state.count + 1};
    case "DECREMENT":
      return {count: state.count - 1}
    default: 
    throw new Error("APP_CRASHED!")
  }

}

export default function ReducerPage() {

  const [state, disptach] = useReducer(Reducer, initialState)

  console.log("Renderizado delm componente")

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-2 space-y-2">
        <p>UseReducer</p>
        <p>Count {state.count}</p>
        <button className="bg-emerald-700 p-2 rounded-sm" onClick={() => disptach({type: 'INCREMENT'})}>Increment</button>
        <button className="bg-rose-700 p-2 rounded-sm" onClick={() => disptach({type: 'DECREMENT'})}>Decrement</button>
      </div>
    </Layout>
  );
}

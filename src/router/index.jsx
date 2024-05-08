import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MemoPage from "../pages/MemoPage";
import CallbackPage from "../pages/CallbackPage";
import ContextPage from "../pages/ContextPage";
import RefPage from "../pages/RefPage";
import ReducerPage from "../pages/ReducerPage";

export const pages = [
  { name: "Home", path: "/", component: HomePage},
  { name: "Context", path: "/context", component: ContextPage},
  { name: "Reference", path: "/ref", component: RefPage},
  { name: "Reducers", path: "/reducer", component: ReducerPage},
  { name: "Memo", path: "/memo", component: MemoPage },
  { name: "Callback", path: "/callback", component: CallbackPage },
  
];

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map((el) => (
          <Route
            key={crypto.randomUUID()}
            path={el.path}
            element={<el.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

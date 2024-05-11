import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const pages = [
  { name: "Home", path: "/", component: HomePage},
  
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

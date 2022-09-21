import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Laptop from "./Laptop";
import Laptopadd from "./Laptopadd";
import LaptopDetail from "./LaptopDetail";
import Home from "./Home";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Laptop" element={<Laptop />}></Route>
        <Route path="/Laptop/:id" element={<LaptopDetail />}></Route>
        <Route path="/Laptop/add" element={<Laptopadd />}></Route>
        <Route path="/Laptop/edit/:id" element={<Laptopadd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

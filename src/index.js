import React from "react";
import ReactDOM from "react-dom/client";

// Cấu hình router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import UseStateDemo from "./pages/Hooks/UseStateDemo";
import UseEffectDemo from "./pages/Hooks/UseEffectDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path="login" index element={<Login />}></Route>
        <Route path="register" index element={<Register />}></Route>
        <Route path="contact" index element={<Contact />}></Route>
        <Route path="use-state-demo" index element={<UseStateDemo />}></Route>
        <Route path="use-effect-demo" index element={<UseEffectDemo />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/projects" Component={Projects} />
      <Route path="/contact" Component={Contact} />
    </Routes>
  );
}

export default AppRoutes;

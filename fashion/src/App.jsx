import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { ROUTES } from "./utils/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Details from "./pages/Details";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} exact />
        <Route path={ROUTES.ABOUT} element={<About />} exact />
        <Route path={ROUTES.PRODUCTDETAILS} element={<Details />} exact />
      </Routes>
    </Router>
  );
}

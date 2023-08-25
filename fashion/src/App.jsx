import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { ROUTES } from "./utils/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Details from "./pages/Details";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} exact />
        <Route path={ROUTES.ABOUT} element={<About />} exact />
        <Route path={ROUTES.PRODUCTDETAILS} element={<Details />} exact />
        <Route path={ROUTES.SHOPPINGCART} element={<ShoppingCart />} exact />
        <Route path={ROUTES.CONTACT} element={<Contact />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./CustomersSay";
import Footer from "./Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { BookPage } from "./components/BookPage";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/BookPage" element={<BookPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

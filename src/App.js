import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import the Layout component
import Nav from "./Nav";
import BookPage from "./BookingPage";
import Hero from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./CustomersSay";
import About from "./Chicago";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/Chicago" element={<About />} />
          <Route path="/BookingPage" element={<BookPage />} />
        </Routes>
      </Layout>
      <Hero />
      <Specials />
      <Testimonials />
      <Footer />
    </Router>
  );
}

export default App;

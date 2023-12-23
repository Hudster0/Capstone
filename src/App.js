import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import BookPage from "./BookingPage";
import Hero from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./CustomersSay";
import About from "./Chicago";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Chicago" element={<About />} />
          <Route path="/booking" element={<BookPage />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
      <Nav />
      <Hero />
      <Specials />
      <Testimonials />
      <BookPage/>
      <About />
      <Footer />
    </>
  );
}

export default App;

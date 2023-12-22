import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import About from './Chicago';
import { Routes, Route } from "react-router-dom";
import BookPage from './BookingPage';
import Hero from './CallToAction';
import Testimonials from './CustomersSay';
import Specials from './Specials';
import Router from './Router';

function App() {
  return (
    <>
      <Router/>
      <div class="Top">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;

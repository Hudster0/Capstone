import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <>
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
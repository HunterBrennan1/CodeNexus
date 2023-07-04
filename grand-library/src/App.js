
import './App.css';
import Navbartop from './components/navbar';
import Hero from './components/hero';
import Bubbles from './components/bubbles';
import Footer from './components/footer';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbartop />
      <Hero />
      <Bubbles />
      <Footer />
    </div>
  );
}

export default App;

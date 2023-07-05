
import './App.css';
import Home from './components/home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar';
import Searchbar from './components/searchbar';
import Cardhero from './components/cardpagehero';


function App() {
  return (
    <div>
      <NavBar />
      <Searchbar />
      <Cardhero />
    </div>
    // <BrowserRouter>
    //   <Routes>

    //     <Route path='/' element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

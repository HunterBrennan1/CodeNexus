
import './App.css';
import Home from './components/home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar';
import Searchbar from './components/searchbar';
import Toolspage from './components/toolscontentpage';
import Protab from './components/protab';


function App() {
  return (
    // <div>
    //   <NavBar />
    //   <Searchbar />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tools' element={<Toolspage />}></Route>
        <Route path='/pro' element={<Protab />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

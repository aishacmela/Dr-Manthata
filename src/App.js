import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from './AboutUs'
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Move from "./Move";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;

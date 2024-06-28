import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
// import {Favourites} from "./components/Favourites.jsx"
import Coin from "./components/Coin.jsx";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

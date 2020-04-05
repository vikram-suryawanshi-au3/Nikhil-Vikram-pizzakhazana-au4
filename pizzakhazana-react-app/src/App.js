import React from 'react';
import './App.css';
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="app-parent">
      <div>
      <Navbar></Navbar>
      <Home></Home>
      </div>
      <div>
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;

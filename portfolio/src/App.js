import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About"; 
import Skill from "./Containers/Skills";
import MyJourney from './Containers/My Journey';
 
// import R from "./Containers/My Journey";
// import Portfolio from "./Containers/Portfolio";
import Contact from "./Containers/Contact";
import Navbar from "./Components/navBar";
import ParticlesBackground from "./ParticlesBackground"; 
import "./App.scss";
import { Navigate } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      {/* ✅ Particles Background */}
      {/* <ParticlesBackground /> */}
   


      {/* ✅ Navigation Bar */}
      <Navbar />

      {/* ✅ Main Content */}
      <div className="App-content"> 
     

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/My Journey" element={<MyJourney/>} />
  <Route path="/skills" element={<Skill />} />
  {/* <Route path="/portfolio" element={<Portfolio />} /> */}
  <Route path="/contact" element={<Contact />} />
  <Route
  path="*"
  element={
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1 style={{ fontSize: "4rem", color: "#f5c518" }}>404</h1>
      <p style={{ color: "#aaa" }}>Oops! Page not found.</p>
    </div>
  }
/>


  {/* ✅ Redirect "/About" to "/about" */}

</Routes>
      </div>
    </div>
  );
}

export default App;   


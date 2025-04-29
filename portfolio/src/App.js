import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About"; 
import Skill from "./Containers/Skills";
import Resume from "./Containers/Resume";
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
  <Route path="/resume" element={<Resume />} />
  <Route path="/skills" element={<Skill />} />
  {/* <Route path="/portfolio" element={<Portfolio />} /> */}
  <Route path="/contact" element={<Contact />} />

  {/* ✅ Redirect "/About" to "/about" */}

</Routes>
      </div>
    </div>
  );
}

export default App;

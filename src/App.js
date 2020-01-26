import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "./components/styles/navBar.scss";
import "./components/styles/main.scss";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

const App = () => {
  let [isMobile, setisMobile] = useState("play");

  let getWidth = () => {
    window.addEventListener("resize", e => {
      let width = e.target.innerWidth;
      if (width <= 700) {
        setisMobile("stop");
      } else if (isMobile === "stop" && width > 700) {
        setisMobile("play");
      }
    });
  };
  useEffect(() => {
    getWidth();
  }, [isMobile]);

  console.log(isMobile);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Hero stopGsap={isMobile} />
        <div className="content">
          <Skills stopGsap={isMobile} />
          <Projects stopGsap={isMobile} />
          <Footer stopGsap={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default App;

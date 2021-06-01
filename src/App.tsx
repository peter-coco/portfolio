import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { About } from "./components/about/about";

import { Works } from "./components/works/works";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";

function App() {
  const [homeToggle, setHomeToggle] = useState(true);
  const [aboutToggle, setAboutToggle] = useState(false);
  const [worksToggle, setworksToggle] = useState(false);

  return (
    <div id="background">
      <Navbar
        homeToggle={homeToggle}
        aboutToggle={aboutToggle}
        worksToggle={worksToggle}
        setHomeToggle={setHomeToggle}
        setAboutToggle={setAboutToggle}
        setworksToggle={setworksToggle}
      />
      <Home homeToggle={homeToggle} />
      <About aboutToggle={aboutToggle} />
      <Works worksToggle={worksToggle} />
    </div>
  );
}

export default App;

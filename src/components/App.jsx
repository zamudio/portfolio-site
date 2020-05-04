import React, { useState, useEffect } from "react";
import DarkModeToggle from "./Toggle/DarkModeToggle";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
// import Contact from './Contact/Contact';
import Footer from "./Footer/Footer";

import { PortfolioProvider } from "../context/context";

import { heroData, aboutData, projectsData, footerData } from "../mock/data"; // contactData in [3]

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  // const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    // setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, footer }}>
      {/* contact on [3] above */}
      <DarkModeToggle />
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </PortfolioProvider>
  );
}

export default App;

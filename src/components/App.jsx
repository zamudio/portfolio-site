import React, { useState, useEffect } from "react";
import DarkModeToggle from "./Toggle/DarkModeToggle";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";

import { PortfolioProvider } from "../context/context";

import {
  heroData,
  aboutData,
  projectsData,
  blogData,
  footerData,
} from "../mock/data";

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [blog, setBlog] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setBlog({ ...blogData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, blog, footer }}>
      <DarkModeToggle />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;

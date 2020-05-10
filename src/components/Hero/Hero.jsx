import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import PortfolioContext from "../../context/context";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          {/* Hey there. I'm Zoe Rodriguez , a product design & UX/UI enthusiast living in Los Angeles & working at InStride as a product designer. */}
          <h1 className="hero-title">
            {title || "Hey there. I'm"}{" "}
            {/* <span className="text-color-main">{name || "Michael Zamudio"}</span> */}
            <span className="red">{name || "Michael Zamudio"}</span>
            {","}
            <br />
            {subtitle || "a "}
            <span className="orange">Software Developer</span>
            {" && "}
            <span className="green">UI/UX enthusiast</span>
            {" living in "}
            <span className="purple">{"Seattle"}</span>
            {"."}
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              {cta || "Learn more about me"}
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

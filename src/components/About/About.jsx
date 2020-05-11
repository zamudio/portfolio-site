import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";
import PortfolioContext from "../../context/context";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, email } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              {/* I’m Venezuela-smitten, Columbus-cultured, and Los Angeles-inspired. A dual Venezuelan-U.S. citizen, I moved from Caracas to the U.S. 9 years ago to pursue my passion and purpose for design. While I studied at Columbus College of Art & Design, and currently live in LA, I draw influence from travels all around the world where I’ve endeavored to take in all the art and good food in sight.

In the world of design, digital is what lights my fire, and drives me to wake up every morning. I consider it my greatest passion to transform brand visions into living, breathing digital experiences that delight and inspire. I love to tap into the infinite potential of technology and devise markedly simple, yet beautifully immersive designs. Around the office, I’m especially known for my speedy delivery, creative vision, and attention-to-detail.

My clients normally hire me for:

Brand Identity Design
Digital Product / Web Design
UI Experiences
If you're interested in my work or have a project in mind that you think I’d be a good fit for, let’s talk!

Thanks for stopping by. */}
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
                </p>
                {email && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={
                        // email ? `mailto:${email}` : "https://github.com/zamudio"
                        email
                      }
                    >
                      Contact me
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

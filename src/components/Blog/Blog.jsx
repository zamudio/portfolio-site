import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";

const Blog = () => {
  const { blog } = useContext(PortfolioContext);
  const { btn, paragraphOne, url } = blog; // paragraphTwo in [2] paragraphThree in [3]

  return (
    <section id="blog">
      <Container>
        <Title title="My personal blog" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text">
              {paragraphOne ||
                "Check out my blog where I mostly write about tech. I've been helped countless times by blogs written by other developers. This is my way of giving back."}
            </p>
            {/* <p className="about-wrapper__info-text">
              {paragraphTwo ||
                "I've been helped countless times by blogs written by other developers. This is my way of giving back."}
            </p>
            <p className="about-wrapper__info-text">
              {paragraphThree || "This is my way of giving back."}
            </p> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={url}
            >
              {btn || "Blog"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Blog;

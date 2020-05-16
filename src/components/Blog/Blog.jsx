import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";

const Blog = () => {
  const { blog } = useContext(PortfolioContext);
  const { btn, paragraphOne, paragraphTwo, url } = blog; // paragraphThree in [3]

  return (
    <section id="blog">
      <Container>
        <Title title="My Blog" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text">
              {paragraphOne ||
                "Check out my blog where I mostly write about tech, and maybe some soccer. I think programming is a discipline of constant learning and I've been helped countless times by other's blogs. This is my way of giving back."}
            </p>
            <p className="about-wrapper__info-text">
              {paragraphTwo ||
                "Built with Gatsby, it's responsive and lightning quick."}
            </p>
            {/* <p className="about-wrapper__info-text">
              {paragraphThree ||
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
            </p> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={
                url
                // ? `mailto:${blog-link}`
                // : "https://github.com/cobidev/react-simplefolio"
              }
            >
              {btn || "This way"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Blog;

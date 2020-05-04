import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";

const Blog = () => {
  const { blog } = useContext(PortfolioContext);
  const { btn, paragraphOne, paragraphTwo, paragraphThree, url } = blog;

  return (
    <section id="blog">
      <Container>
        <Title title="My Blog" />
        <Fade bottom duration={1000} delay={800} distance="30px">
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
              {btn || "This way..."}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Blog;

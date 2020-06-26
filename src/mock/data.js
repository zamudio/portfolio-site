import uuidv1 from "uuid/v1";

// HEAD DATA
export const headData = {
  title: "Software Developer in Seattle", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "",
  subtitle: "",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "I was a student, an activist, a teacher, and now a developer. What I really am is a life-long learner that values empathy, diversity, and creativity. I enjoy working on projects that are fast-moving and forward thinking.",
  paragraphTwo:
    "If you're interested in my work or have a project in mind that you think I’d be a good fit for, let’s talk!",
  // paragraphThree:
  //   "If you're interested in my work or have a project in mind that you think I’d be a good fit for, let’s talk!",
  resume: "../images/MichaelZamudioResume.pdf", // if no resume, the button will not show up
  // email: "#",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: "project.png",
    title: "Janus-ai",
    info:
      "A fullstack app built with React, Node.js, Express.js, PostgreSQL, and Tachyons. A user can sign up and upload photos to be run through a facial recognition machine learning API.",
    info2:
      "This app handles authentication with bcrypt, custom routing, has a relational database built with postgresql.",
    url: "https://janus-ai.herokuapp.com/",
    repo: "https://github.com/zamudio/janus-ai", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project2.png",
    title: "React-Pokedex",
    info:
      "A Pokedex built with React, Bootstrap and the really cool, and totally free, PokeAPI. The site shows all original 151 Pokemon (yes, I'm including Mew as an OG).",
    info2:
      "Each individual Pokemon is clickable and brings you to a Card component listing all their stats.",
    url: "https://pokedex-reacted.netlify.app/",
    repo: "https://github.com/zamudio/react-pokedex", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project3.png",
    title: "Facegram",
    info:
      "A Ruby on Rails CRUD app that mimics Facebook and Instagram. It allows a user to sign up, log in, make posts, edit profile, and all the standard aspects of a social media app.",
    info2:
      "Built solely with Ruby on Rails, Bootstrap, and a SQL DB, to practice building backend apps with authentication.",
    // url: "",
    repo: "https://github.com/zamudio/facegram", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project4.png",
    title: "Spotified-React",
    info:
      "Built with React and the Spotify API, this site allows you to log into your account and have what you're currently listening to displayed on the page.",
    info2:
      "I built this mostly to gain experience with Spotify's API and Oauth.",
    url: "https://spotified-react.netlify.app/",
    repo: "https://github.com/zamudio/spotified-react", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project5.png",
    title: "Chuck Norris Jokes",
    info:
      "Built with React, Bootstrap, and Chuck Norris API, this simple app serves you a joke from the API",
    info2:
      "Each time you refresh, or hit the button for a new joke, you recieve a new joke value from the API",
    url: "https://chuck-norris-jokes-react.netlify.app/",
    repo: "https://github.com/zamudio/chuck-norris-react", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project6.png",
    title: "My Blog",
    info:
      "Built with Gatsby.js and React, my blog is just a project I made to write articles and hopefully help some beginners the way I was helped.",
    info2: "Main feature is that it has a dark mode/light mode switch",
    url: "https://zamudioblog.com",
    repo: "https://github.com/zamudio/blog/", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project7.png",
    title: "Robodex",
    info:
      "Built with React and Redux, this site shows you a list of your robot friends and lets you use a searchbar for interactive searching.",
    info2:
      "Pulls in images and user data from APIs, this was practice with using Redux and async javascript.",
    url: "https://zamudio.github.io/robodex/",
    repo: "https://github.com/zamudio/robodex", // if no repo, the button will not show up
  },
];

// BLOG DATA
export const blogData = {
  cta: "",
  btn: "",
  url: "https://zamudioblog.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/michael-zamudio",
    },
    {
      id: uuidv1(),
      name: "github",
      url: "https://github.com/zamudio",
    },
  ],
};

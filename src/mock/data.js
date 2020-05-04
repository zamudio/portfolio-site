import uuidv1 from "uuid/v1";

// HEAD DATA
export const headData = {
  title: "", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
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
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  // resume: "#", // if no resume, the button will not show up
  email: "#",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: "project.jpg",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project.jpg",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: "project.jpg",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "", // if no repo, the button will not show up
  },
];

// BLOG DATA
export const blogData = {
  cta: "",
  btn: "",
  url: "https://zamudio-blog.netlify.app",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: "instagram",
      url: "",
    },
    {
      id: uuidv1(),
      name: "linkedin",
      url: "",
    },
    {
      id: uuidv1(),
      name: "github",
      url: "",
    },
  ],
};

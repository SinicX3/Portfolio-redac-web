// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Benoit",
  middleName: "",
  lastName: "Théry",
  message: "Optez pour du contenu de qualité.",
  icons: [
    // {
    //   image: "fa-github",
    //   url: "https://github.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "/img/malt.png",
      url: "https://www.malt.fr/profile/TON_NOM",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/benoit-th%C3%A9ry-bb5a6080/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "A propos",
  imageLink: require("../editable-stuff/benoitthery.jpg"),
  imageSize: 375,
  message:
    "Je m'appelle Benoit Théry. Rédacteur web/SEO depuis 10 ans, je produis des contenus optimisés selon les besoins. Aujourd'hui, je suis également formé au développement web, ce qui me permet de créer des sites de bout en bout, en plus d'améliorer mon SEO technique.",
  resume: "https://drive.google.com/file/d/1XShhxoHb_8NRNfuTtlmGjGDhaBPG8i9P/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Mes projets",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/benoitthery.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/benoitthery.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Compétences",
  hardSkills: [
    { name: "Français", value: 90 },
    { name: "Anglais", value: 70 },
    { name: "Journalisme", value: 80 },
    { name: "SEO rédactionnel", value: 75 },
    { name: "SEO technique", value: 70 },
    { name: "Utilisation de l'IA", value: 80 },
  ],
  softSkills: [
    { name: "Autonomie", value: 90 },
    { name: "Flexibilité", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Réactivité", value: 85 },
    { name: "Gestion des conflits", value: 70 },
    { name: "Positivité", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contactez-moi",
  message:
    "Je suis toujours à l'écoute de nouveaux projets, en particulier dans les domaines de la high-tech (comme l'intelligence artificielle ou l'auto électrique). N'hésitez pas à me contacter à",
  email: "thery.benoit@hotmail.fr",
};

const experiences = {
  show: false,
  heading: "Expériences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

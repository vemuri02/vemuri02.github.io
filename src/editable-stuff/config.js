// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sai Manohar",
  middleName: "",
  lastName: "Vemuri",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mvemuri6642",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mvemuri6642",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mvemuri02/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mvemuri6642/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/mvemuri6642/",
    },
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
  heading: "About Me",
  imageLink: require("../editable-stuff/mvemuri6642.jpg"),
  imageSize: 375,
  message:
    "Computer Science graduate student specializing in Machine Learning, Data Analysis, Deep Learning, and Software Development.Actively seeking opportunities to contribute skills to impactful projects in a collaborative environment.",
  resume: "https://1drv.ms/b/s!Anucm7nrFeZ2iZYe3MTdkaMdClW2sQ?e=KzJg59",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mvemuri6642", //i.e."johnDoe12Gh"
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
      img: require("../editable-stuff/mvemuri6642.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/mvemuri6642.jpg"), 
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
  heading: "Skills",
  programmingLanguages: [
    { name: "Python", value: 90 },
    { name: "R", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "Java", value: 90 },
    { name: "SQL", value: 65 },
    { name: "NoSql", value: 55 },
  ],
  dataScience: [
    { name: "Statistical Analysis", value: 80 },
    { name: "Predictive Modelling", value: 90 },
    { name: "Ensemble Methods", value: 75 },
    { name: "EDA", value: 85 },
    { name: "Computer Vision", value: 75 },
    { name: "Image Processing", value: 90 },
    { name: "Natural Language Processing", value: 70 },
    { name: "Anomaly Detection", value: 90 },
  ],
  pythonPackages: [
    { name: "Pandas", value: 80 },
    { name: "Numpy", value: 90 },
    { name: "matplotlib,", value: 75 },
    { name: "scikit-learn", value: 85 },
    { name: "PyTorch", value: 75 },
    { name: "Keras", value: 90 },
    { name: "TensorFlow", value: 70 },
    { name: "OpenCV", value: 90 },
    { name: "NLTK", value: 90 },
    { name: "spaCy", value: 90 },
  ],
  WebTechnologies: [
    { name: "HTML,", value: 80 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "AJAX", value: 85 },
    { name: "Flask", value: 75 },
  ],
  Databases: [
    { name: "MySql", value: 80 },
    { name: "MongoDB", value: 90 },
    { name: "SQL Server", value: 75 },
    { name: "PostgreSQL", value: 85 },
    { name: "Redis", value: 75 },
  ],
  cloudServices: [
    { name: "Amazon EC2", value: 80 },
    { name: "Amazon EMR", value: 90 },
    { name: "AWS Sagemaker", value: 75 },
    { name: "Kinesis", value: 85 },
    { name: "Apache Flink", value: 75 },
    { name: "Git", value: 90 },
    { name: "PySpark", value: 70 },
    { name: "Hive", value: 90 },
    { name: "Spark", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Data Scientist or Software Developer Positions! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "vemurimanohar6642@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Data Analyst Intern',// Here Add Company Name
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

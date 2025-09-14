// Navigation Bar SECTION
import React from 'react';

const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#388E3C, #6A1B9A, #004D40, #424242",
  firstName: "Sai Manohar",
  middleName: "",
  lastName: "Vemuri",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/vemuri02",
    },


    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vemuri02/",
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
    "I am a PhD student in Computer Science and Engineering at the Illinois Institute of Technology, specializing in AI model optimization, machine learning, and edge AI deployment. My research focuses on hardware/software co-design for real-time perception in autonomous driving, combining object detection, semantic segmentation, and LiDAR-camera fusion. I leverage techniques like Neural Architecture Search, quantization, pruning, and knowledge distillation to optimize models for edge devices, with an emphasis on low-power FPGA deployment. ",
  resume: "https://1drv.ms/b/c/76e615ebb99b9c7b/EXG0GwFKTZFJq83vjyPIEBwBQ8w02rCIwnHJi8MtTMzFqA?e=8nQyWZ",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "vemuri02",
  reposLength: 0,
  specificRepos: ["Efficient-Vision-Transformer-for-Object-Recognition","Image-Translation-using-Self-Attention-GAN","Seismic-Image-Segmentation-using-UNet","Segmentation-of-Renal-Stones-using-Image-Processing-and-CNN"],
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
    { name: "R", value: 85 },
    { name: "C", value: 75 },
    { name: "C++", value: 75 },
    { name: "C#", value: 70 },
    { name: "Java", value: 85 },
    { name: "SQL", value: 90 },
    { name: "NoSQL", value: 80 },
  ],
  dataScience: [
    { name: "Statistical Analysis", value: 90 },
    { name: "Predictive Modelling", value: 85 },
    { name: "Ensemble Methods", value: 80 },
    { name: "Exploratory Data Analysis (EDA)", value: 85 },
    { name: "Anomaly Detection", value: 75 },
    { name: "Data Visualization", value: 80 },
    { name: "Supervised Learning", value: 90 },
    { name: "Unsupervised Learning", value: 85 },
    { name: "Feature Engineering", value: 90 }
  ],
  frameworks: [
    { name: "Pandas", value: 95 },
    { name: "Numpy", value: 95 },
    { name: "matplotlib", value: 90 },  // Added
    { name: "scikit-learn", value: 90 }, // Added
    { name: "PyTorch", value: 85 },      // Added
    { name: "Keras", value: 85 },        // Added
    { name: "TensorFlow", value: 90 },   // Added
    { name: "OpenCV", value: 90 },       // Added
    { name: "NLTK", value: 80 },         // Added
    { name: "spaCy", value: 80 },        // Added
    { name: "LangChain", value: 75 },    // Added
    { name: "CUDA/GPU Programming", value: 85 } // Added
  ],
  genAI: [
    { name: "Transformer Models", value: 90 }, // Added
    { name: "Bidirectional Encoder Representations from Transformers (BERT)", value: 85 }, // Added
    { name: "Generative Pre-trained Transformer (GPT)", value: 90 }, // Added
    { name: "Reinforcement Learning", value: 80 }, // Added
    { name: "Generative adversarial networks (GANs)", value: 85 }, // Added
    { name: "Variational Autoencoder (VAE)", value: 80 }, // Added
    { name: "Diffusion Models", value: 75 }, // Added
    { name: "Large language models (LLMs)", value: 90 }, // Added
    { name: "Reinforcement Learning from Human Feedback (RAG)", value: 80 } // Added
  ],
  deepLearning: [
    { name: "Image Processing", value: 90 }, // Added
    { name: "Image Classification", value: 85 }, // Added
    { name: "Object Detection", value: 90 }, // Added
    { name: "Semantic Segmentation", value: 85 }, // Added
    { name: "Feature Extraction", value: 80 }, // Added
    { name: "Image Augmentation", value: 85 }, // Added
    { name: "Natural Language Processing", value: 80 }, // Added
    { name: "Auto Encoders", value: 75 }, // Added
    { name: "Convolutional Neural Networks (CNNs)", value: 90 }, // Added
    { name: "Recurrent Neural Networks (RNNs) & LSTM", value: 80 } // Added
  ],
  mathOpt: [
    { name: "Linear Algebra", value: 90 }, // Added
    { name: "Multivariate Calculus", value: 85 }, // Added
    { name: "Optimization Algorithms", value: 90 }, // Added
    { name: "Principal Component Analysis (PCA)", value: 85 }, // Added
    { name: "Gradient Descent", value: 90 }, // Added
    { name: "Hyperparameter Tuning", value: 80 }, // Added
    { name: "Stochastic Optimization", value: 85 }, // Added
    { name: "Convex Optimization", value: 80 } // Added
  ],
  stats: [
    { name: "Bayesian Inference", value: 85 }, // Added
    { name: "Hypothesis Testing", value: 80 }, // Added
    { name: "Statistical Learning", value: 90 }, // Added
    { name: "Linear Regression", value: 90 }, // Added
    { name: "Distribution Analysis", value: 85 }, // Added
    { name: "Residual Analysis", value: 80 } // Added
  ],      
  pythonPackages: [
    { name: "Pandas", value: 95 },
    { name: "Numpy", value: 95 },
    { name: "matplotlib,", value: 80 },
    { name: "scikit-learn", value: 90 },
    { name: "PyTorch", value: 95 },
    { name: "Keras", value: 95 },
    { name: "TensorFlow", value: 95 },
    { name: "OpenCV", value: 95 },
    { name: "NLTK", value: 80 },
    { name: "spaCy", value: 80 },
  ],
  WebTechnologies: [
    { name: "HTML,", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "AJAX", value: 70 },
    { name: "Flask", value: 80 },
    { name: "Node.js", value: 85 },
    { name: "React", value: 85 },
  ],
  Databases: [
    { name: "MySql", value: 95 },
    { name: "MongoDB", value: 90 },
    { name: "SQL Server", value: 85 },
    { name: "Oracle", value: 90},
    { name: "PostgreSQL", value: 85 },
    { name: "Redis", value: 80 },
  ],
  cloudServices: [
    { name: "AWS", value: 85 },
    { name: "Databricks", value: 80 },
    { name: "Gitlab", value: 80 },
    { name: "Hive", value: 75 },
    { name: "Glue", value: 80 },
    { name: "Hadoop", value: 70 },
    { name: "Apache Spark", value: 85 },
    { name: "Airflow", value: 75 },
    { name: "Docker", value: 90 },
    { name: "Pig", value: 70 },
    { name: "Kafka", value: 75 },
  ],
  devOpsAndTools: [
    { name: "Docker", value: 90 },
    { name: "Git", value: 85 },
    { name: "CI/CD", value: 80 },
    { name: "JIRA", value: 75 },
    { name: "Confluence", value: 75 },
    { name: "Tableau", value: 80 },
  ],
  modelOpt: [
    { name: "Neural Architecture Search", value: 80 }, // Added
    { name: "Pruning", value: 85 }, // Added
    { name: "Knowledge Distillation", value: 85 }, // Added
    { name: "Quantization", value: 80 }, // Added
  ],
  
  hardwareDesign: [
    { name: "HDL", value: 75 }, // Added
    { name: "Verilog", value: 80 }, // Added
    { name: "RTL", value: 80 }, // Added
  ],
  
  lowPowerTechniques: [
    { name: "Clock Gating", value: 85 }, // Added
    { name: "Power Gating", value: 85 }, // Added
    { name: "Memory Design", value: 80 }, // Added
  ],
  
  sensorIntegration: [
    { name: "Camera Integration", value: 85 }, // Added
    { name: "LiDAR Integration", value: 85 }, // Added
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
  show: true,
  heading: "Experiences",
  data: [
    // {
    //   role: 'Graduate Teachine Assistant',// Here Add Company Name
    //   companylogo: require('../assets/img/iit.png'),
    //   date: 'Aug 2023– May 2024',
    //   description:<ul>
    //     <li><p align='justify'>Guided students in understanding core machine learning concepts, graded assignments, and gave feedback for improvement.
    //     </p></li>
    //     </ul>
    // },
    {
      role: 'AI Research Intern',// Here Add Company Name
      companylogo: require('../assets/img/soundsafe.png'),
      date: 'Dec 2024 – Present',
      description:<ul>
        <li><p align='justify'>Currently working in the R&D team, researching foundation models and developing advanced techniques for secure and resilient audio signal processing to ensure authenticity and traceability. </p></li>
        <li><p align='justify'>My role involves exploring cutting-edge deep learning and signal processing methods to enhance the integrity and protection of audio data.</p></li>
      </ul>
      // description:'Statistical Analysis of Global Facebook Ad Campaigns: Conducted in-depth statistical analysis using techniques including correlation analysis, ANOVA, and regression to identify areas for optimization. Regression Analysis for Cost Reduction: Applied regression analysis resulting in a 5% cost reduction through targeted campaign enhancements. Delivered actionable insights and clear visualizations to optimize ad performance and enhance campaign success.'
    },
    {
      role: 'Research Assistant',// Here Add Company Name
      companylogo: require('../assets/img/iit2.png'),
      date: 'Oct 2024 – Present',
      description:<ul>
        <li><p align='justify'>Researching HW/SW co-design for ML/DL on edge devices, focusing on object detection, semantic segmentation, and 
        LiDAR-camera fusion for real-time perception in ADAS and autonomous driving. </p></li>
        <li><p align='justify'>Optimizing AI models with neural architecture search, quantization, knowledge distillation, and pruning, while implementing 
        low-power RTL and system-level design for efficient FPGA deployment and energy-efficient edge AI. </p></li>
      </ul>
      // description:'Statistical Analysis of Global Facebook Ad Campaigns: Conducted in-depth statistical analysis using techniques including correlation analysis, ANOVA, and regression to identify areas for optimization. Regression Analysis for Cost Reduction: Applied regression analysis resulting in a 5% cost reduction through targeted campaign enhancements. Delivered actionable insights and clear visualizations to optimize ad performance and enhance campaign success.'
    },
    {
      role: 'AI Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/ramesh.png'),
      date: 'Dec 2020 - Aug 2022',
      description:<ul>
        <li><p align='justify'>Developed deep learning models for segmentation of CT/MRI scans targeting gliomas, meningiomas, and cardiac conditions, using 
        YOLOv4, Faster R-CNN, and Mask R-CNN for ischemic stroke and myocardial infarction detection. </p></li>
        <li><p align='justify'>Improved diagnostic accuracy with GAN-based augmentation, attention mechanisms, and texture analysis (Gabor filters, Haralick 
          features), achieving 95% F1 score, 93% accuracy, and 90% precision in medical condition detection.
          </p></li>
      </ul>
      // description:'Statistical Analysis of Global Facebook Ad Campaigns: Conducted in-depth statistical analysis using techniques including correlation analysis, ANOVA, and regression to identify areas for optimization. Regression Analysis for Cost Reduction: Applied regression analysis resulting in a 5% cost reduction through targeted campaign enhancements. Delivered actionable insights and clear visualizations to optimize ad performance and enhance campaign success.'
    },
    {
      role: 'Network Engineer Industrial Trainee',
      companylogo: require('../assets/img/cisco.png'),
      date: 'Nov 2018 – April 2019',
      description:<ul>
      <li><p align='justify'>Engaged with diverse computer network technologies, involving setup and arrangement of routers and switches, and achieved CCNA
certification during training tenure.</p></li>
      <li><p align='justify'>Attained hands-on familiarity with computer networking concepts, routing protocols, and troubleshooting. Applied JAVA
programming for protocol implementation, contributing to e-mail programming (SMTP, POP), and file transfer protocol integration.</p></li></ul>
      // description:'Engaged with diverse computer network technologies, involving setup and arrangement of routers and switches, and achieved CCNA certification during training tenure. Attained hands-on familiarity with computer networking concepts, routing protocols, and troubleshooting. Applied JAVA programming for protocol implementation, contributing to e-mail programming (SMTP, POP), and file transfer protocol integration.'
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'Doctor of Philosophy (PhD), Computer Science & Engineering',
      companylogo: require('../assets/img/iit2.png'),
      date: 'Aug 2022 – Present',
    },
    {
      role: 'Bachelor of Technology (B. Tech), Computer Science & Engineering',
      companylogo: require('../assets/img/jntuk.png'),
      date: 'June 2019 – May 2022',
    },
    {
      role: 'Diploma, Computer Science',
      companylogo: require('../assets/img/crr.png'),
      date: 'June 2016 – April 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences,education };

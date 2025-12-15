// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';

import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import freelan from './assets/company_logo/freelan.png';


// Education Section Logo's

import ccrclogo from './assets/education_logo/ccrc-logo.jpg';
import modernlogo from './assets/education_logo/moderntulsi.png';

// Project Section Logo's

import jholaai from './assets/work_logo/jholaai.png';
import resume from './assets/work_logo/resume.png';
import music from './assets/work_logo/music.png';
import movie from './assets/work_logo/movie.png';
import groceries from './assets/work_logo/groceries.png';
import media from './assets/work_logo/media.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
    
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: freelan,
      role: "Fullstack Developer",
      company: "Freelancing",
      date: "Nov 2023 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        
        " Next Js",
      ],
    },
  ];
  export const education = [
   
    {
      id: 0,
      img: ccrclogo,
      school: "Capital College & Research Centre, Kathmandu",
      date: "2023-25",
      grade: "3.09 GPA & 3.06 GPA",
      desc: "I completed my class 11 & 12 education from CCRC, Kathmandu, under the  NEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "NEB(XI-XII) - PCM with Computer Science",
    },
    {
      id: 1,
      img: modernlogo,
      school: "Modern Tulsi Secondary School, Salyan",
      date: "2022",
      grade: "3.2 GPA",
      desc: "I completed my class 10 education from Modern Tulsi Secondary School, Salyan, under the NEB board, where I studied Science with Computer.",
      degree: "NEB(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Software as a Service",
      description:
        "A full-stack SaaS (Software as a Service) platform that provides AI-powered tools for content creation and image editing. Users can generate images, write articles & blogs, and perform advanced image editing like background and object removal.",
      image: jholaai,
      tags: ["React JS", "Tailwind CSS", "JavaScript", "API"],
      github: "https://github.com/dipak0304/SAAS",
      webapp: "https://jholaai-client.vercel.app/",
    },
    {
      id: 1,
      title: "resume-build",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: resume,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/dipak0304/resume-build",
      webapp: "https://resume-build-eta.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movie,
      tags: ["React JS", "API","Express",  "Tailwind CSS", "JavaScript"],
      github: "https://github.com/dipak0304/movie-site",
      webapp: "https://jhola-movie-client.vercel.app/",
    },
    {
      id: 3,
      title: "Music Streaming Web App",
      description:
        "A lightweight Spotify-like web app — a full-stack music streaming clone for learning and demos.",
      image: music,
      tags: ["TypeScript", "API","Express",  "Tailwind CSS", "JavaScript"],
      github: "https://github.com/dipak0304/fullstack-music-",
      webapp: "https://fullstack-music-1.onrender.com/",
    },
    {
      id: 4,
      title: "Groceries web app",
      description:
        "A Grocery Delivery Web Application built with the MERN stack (MongoDB, Express, React, Node.js). Browse, add to cart, and order groceries online with ease!",
      image: groceries,
      tags: ["JavaScript", "Express", "Node js","React", "Angular","Tailwind CSS","MongooDB"],
      github: "https://github.com/dipak0304/jhola-groceries",
      webapp: "https://jhola-groceries-client.vercel.app/",
    },
     {
      id: 5,
      title: "Social Media",
      description:
        "A full-stack social media application built with the MERN stack, featuring real-time chat, user authentication, notifications, and a clean modern UI. This project aims to provide a smooth and secure communication experience similar to modern social platforms.",
      image: media,
      tags: ["JavaScript", "Express", "Node js","React", "Angular","Tailwind CSS","MongooDB"],
      github: "https://github.com/dipak0304/SocialMedia",
      webapp: "https://jhola-media.vercel.app/",
    },
  ];
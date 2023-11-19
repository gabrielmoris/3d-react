import { beehivve, ameropa, me, brasscollective, menudiario, keyboard } from "../assets/images";
import {
  aws,
  camera,
  car,
  contact,
  css,
  cypress,
  estate,
  express,
  figma,
  firebase,
  git,
  github,
  html,
  javascript,
  linkedin,
  locker,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  nuxt,
  openai,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  vue,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: cypress,
    name: "Cypress",
    type: "Testing",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: aws,
    name: "Amazon Web Services",
    type: "Frontend",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Ameropa-reisen GmbH",
    icon: ameropa,
    iconBg: "#dde1ac",
    date: "July 2022 - Today",
    points: [
      "Responsible for maintaining the company's website.",
      "Participating in the development of internal services and the main page, organizing projects with backend developers, and providing solutions for internal services",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Beehivve",
    icon: beehivve,
    iconBg: "#000000",
    date: "Apr 2022 - July 2022",
    points: [
      "Managed the maintenance of the landing page.",
      "Successfully coordinating and executing the migration from Handlebars + Node (Express) to React (Next.js) + Firebase",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: me,
    iconBg: "#b7e4c7",
    date: "Jun 2021 - Today",
    points: [
      "Led development of customized websites, mobile apps, and services.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Strategic decision-making on structure and technology to mockup creation, hosting, and domain management",
    ],
  },
  {
    title: "Trumpet player and Teacher",
    company_name: "Former Background",
    icon: brasscollective,
    iconBg: "#000000",
    date: "Sep 2016 - Jan 2022",
    points: [
      "Presented numerous musical performances.",
      "Successfully built, organized, and coordinated a brass quintet.",
      "Efficiently organized lessons, projects, and worked collaboratively with teachers to ensure effective instruction",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/gabrielmoris",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/gabrielcmoris/",
  },
];

export const projects = [
  {
    iconUrl: menudiario,
    theme: "btn-back-red",
    name: "Menú Diario",
    description:
      "Developed a Android / IOS application that enables restaurants to effortlessly upload their menus, allowing users to conveniently access restaurant offerings with just a single click.",
    linkIOS: "https://apps.apple.com/es/app/menu-di%C3%A1rio/id6467143567",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.menudiario.app",
  },
  {
    iconUrl: keyboard,
    theme: "btn-back-yellow",
    name: "Manuel Casares Website",
    description:
      "The customer needed a website to reach more potential clients. The website was designed following all the requirements of the customer and offers solutions to engage the users with interesting features.",
    link: "https://manuel-casares.vercel.app/",
    linkGithub: "https://github.com/gabrielmoris/www.thebrasscollective.com",
  },
  {
    iconUrl: "https://raw.githubusercontent.com/gabrielmoris/writersbook/master/client/public/logo.png",
    theme: "btn-back-blue",
    name: "Vue Music App",
    description: "Personal project to improve my skills in Vue.js, Pinia as well as firebase (auth, firestore and database).",
    link: "https://yourmusic.vercel.app/",
    linkGithub: "https://github.com/gabrielmoris/vue-music",
  },
  {
    iconUrl: brasscollective,
    theme: "btn-back-black",
    name: "thebrasscollective",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
    linkGithub: "https://github.com/gabrielmoris/www.thebrasscollective.com",
  },
  {
    iconUrl: openai,
    theme: "btn-back-green",
    name: "AI Social Media Post Generator",
    description: "Project from Vueschool.io to learn how to interact with Chatgpt API in the context of a Vue 3 application",
    link: "https://ai-chatbot-vueschools.vercel.app/",
    linkGithub: "https://github.com/gabrielmoris/ai-chatbot-vueschools",
  },
  {
    iconUrl: camera,
    theme: "btn-back-yellow",
    name: "Imageboard",
    description:
      "Project to store and show the pictures I take when I travel and give the opportunity to the rest of the people to comment and upload their own pictures.",
    link: "https://imageboard-v1pf.onrender.com/",
    linkGithub: "https://github.com/gabrielmoris/imageboard",
  },
  {
    iconUrl: locker,
    theme: "btn-back-pink",
    name: "Signatures Bank",
    description:
      "Simple application in express + Handlebars to write a signature with the touchscreen of your phone and download it to use in the computer.",
    link: "https://signaturesbank.onrender.com/",
    linkGithub: "https://github.com/gabrielmoris/signaturesBank",
  },
];

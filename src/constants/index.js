import { beehivve, ameropa, me, brasscollective, menudiario, keyboard, jobsAi } from "../assets/images";
import {
  aws,
  camera,
  contact,
  css,
  cypress,
  express,
  figma,
  firebase,
  git,
  github,
  gitlab,
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
  react,
  redux,
  refhub,
  sass,
  tailwindcss,
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
    type: "Cloud Services",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Backend/Cloud",
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
      "Spearheading the maintenance and enhancement of the company's website to elevate user experience.",
      "Collaborating with backend teams to build internal tools and optimize the main web platform.",
      "Ensuring mobile responsiveness and seamless compatibility across all major browsers.",
      "Engaging in code reviews to maintain high-quality standards and mentor team members.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Beehivve",
    icon: beehivve,
    iconBg: "#000000",
    date: "Apr 2022 - July 2022",
    points: [
      "Maintained and improved the landing page for optimized performance.",
      "Successfully transitioned the tech stack from Handlebars and Node.js to a modern React and Firebase ecosystem.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: me,
    iconBg: "#b7e4c7",
    date: "Jun 2021 - Today",
    points: [
      "Crafting custom websites and apps tailored to client needs, focusing on innovation and usability.",
      "Collaborating in dynamic teams to deliver high-quality digital solutions.",
      "Ensuring designs are visually appealing, mobile-friendly, and highly functional.",
      "Overseeing the entire lifecycle of development, from architecture to hosting and domain setup.",
    ],
  },
  {
    title: "Trumpet Player and Educator",
    company_name: "Music Industry",
    icon: brasscollective,
    iconBg: "#000000",
    date: "Sep 2016 - Jan 2022",
    points: [
      "Performed captivating musical pieces at a variety of events.",
      "Established and directed a successful brass quintet, showcasing exceptional organizational skills.",
      "Designed and delivered engaging lessons, fostering growth in students and collaboration among peers.",
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
  {
    name: "Gitlab",
    iconUrl: gitlab,
    link: "https://gitlab.com/gabrielcmoris",
  },
];

export const projects = [
  {
    iconUrl: refhub,
    theme: "btn-back-orange",
    name: "Refhub",
    description: "A comprehensive platform for managing referral codes. Designed for seamless user experience and secure data management.",
    link: "https://refhub.gabrielcmoris.com/",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.gcm.refhub",
  },
  {
    iconUrl: menudiario,
    theme: "btn-back-red",
    name: "Menú Diario",
    description:
      "An intuitive app connecting restaurants with diners. Restaurants can upload menus effortlessly, and users can browse offerings with a single tap.",
    linkIOS: "https://apps.apple.com/es/app/menu-di%C3%A1rio/id6467143567",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.menudiario.app",
  },
  {
    iconUrl: jobsAi,
    theme: "btn-back-black",
    name: "Jobs-AI",
    description:
      "A cutting-edge web app using Next.js and OpenAI to generate personalized cover letters. Users can customize letters and download PDFs, with support for multiple languages.",
    link: "https://jobs-ai.gabrielcmoris.com/",
  },
  {
    iconUrl: keyboard,
    theme: "btn-back-yellow",
    name: "Manuel Casares Website",
    description: "A bespoke website designed to meet client requirements, offering engaging features and a strong user focus.",
    link: "https://www.manuelcasares.com/",
    linkGithub: "https://github.com/gabrielmoris/www.thebrasscollective.com",
  },
  {
    iconUrl: "https://raw.githubusercontent.com/gabrielmoris/writersbook/master/client/public/logo.png",
    theme: "btn-back-blue",
    name: "Vue Music App",
    description: "A personal project to enhance my expertise in Vue.js, Pinia, and Firebase, featuring a music-focused app.",
    link: "https://yourmusic.vercel.app/",
    linkGithub: "https://github.com/gabrielmoris/vue-music",
  },
  {
    iconUrl: brasscollective,
    theme: "btn-back-black",
    name: "The Brass Collective",
    description:
      "A vibrant website showcasing concert updates, videos, and CD releases for a brass quintet. Includes logo design and dynamic client features.",
    link: "https://www.thebrasscollective.com/",
    linkGithub: "https://github.com/gabrielmoris/www.thebrasscollective.com",
  },
  {
    iconUrl: openai,
    theme: "btn-back-green",
    name: "AI Social Media Post Generator",
    description: "A Vue 3 application showcasing integration with the ChatGPT API to create engaging social media posts.",
    link: "https://ai-chatbot-vueschools.vercel.app/",
    linkGithub: "https://github.com/gabrielmoris/ai-chatbot-vueschools",
  },
  {
    iconUrl: camera,
    theme: "btn-back-yellow",
    name: "Imageboard",
    description: "A community-driven project for sharing and commenting on travel photos, fostering a collaborative space.",
    link: "https://imageboard-v1pf.onrender.com/",
    linkGithub: "https://github.com/gabrielmoris/imageboard",
  },
  {
    iconUrl: locker,
    theme: "btn-back-pink",
    name: "Signatures Bank",
    description: "An innovative app for creating and downloading touchscreen signatures, blending convenience with simplicity.",
    link: "https://signaturesbank.onrender.com/",
    linkGithub: "https://github.com/gabrielmoris/signaturesBank",
  },
];

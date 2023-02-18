import { StaticImageData } from 'next/image';
import TCV2 from '../../../public/assets/images/projects/tc-version2.png';
import TCV1 from '../../../public/assets/images/projects/tc-version1.png';
import TCHOME from '../../../public/assets/images/projects/tc-home.png';
import MYPORTFOLIO from '../../../public/assets/images/projects/portfolio.png';

export interface ProjectData {
  name: string;
  content: string;
  frontend: string[];
  backend: string[];
  image: StaticImageData;
  clipImage?: StaticImageData;
  alignImageLeft: boolean;
  github: string;
  demoUrl?: string;
}

export const projectData: ProjectData[] = [
  // Project 1
  {
    name: 'Taipei Cuisine V2',
    content:
      'An upgraded version of the Taipei Cuisine web application, the app includes better error handling and more secure user verification using JWT. The app gives more options when placing an order, adds social login options, has a better design overall, has an updated and better checkout process ',
    frontend: ['NextJS', 'Typescript', 'Redux', 'Material UI', 'Firebase'],
    backend: [
      'Node',
      'Express',
      'Firebase Admin',
      'Cloud Function',
      'Nodemailer',
    ],
    image: TCV2,
    clipImage: TCHOME,
    alignImageLeft: true,
    github: 'https://github.com/XianFengWu1996/tc_demo_v2',
    demoUrl: 'https://tc-demo-v2.vercel.app',
  },
  // Project 2
  {
    name: 'Taipei Cuisine V1',
    content:
      'A full-stack web app for allowing the residents near the restaurant to have a simpler way to place an order. The web app offer options more specific to the restaurant compared to platforms such as Uber or Doordash where the options are more general. Unfortunately, the web app is just a demo web app now.',
    frontend: ['NextJS', 'Typescript', 'Redux', 'Material UI', 'Firebase'],
    backend: [
      'Node',
      'Express',
      'Firebase Admin',
      'Cloud Function',
      'Nodemailer',
    ],
    image: TCV1,
    clipImage: TCHOME,
    alignImageLeft: false,
    github: 'https://github.com/XianFengWu1996/taipeicuisine_nextjs',
    demoUrl: 'https://tc-demo-v1.vercel.app',
  },
  {
    name: 'Portfolio',
    content:
      "My portfolio web application is developed with NextJS and Typescript. As for styling, I've chosen Tailwind to speed up the coding process meanwhile grasping the concept of Tailwind. All animations are written with CSS and Javascript with no external packages and it is responsive on all devices.",
    frontend: ['NextJS', 'Tailwind', 'CSS', 'Typescript'],
    backend: [],
    image: MYPORTFOLIO,
    alignImageLeft: true,
    github: 'https://github.com/XianFengWu1996/personal-portfolio',
  },
];

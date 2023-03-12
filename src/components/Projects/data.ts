import TCV2 from '../../../public/assets/images/projects/tc-version2.png';
import TCV2_MIN from '../../../public/assets/images/projects/tc-version2-min.png';

import TCV1 from '../../../public/assets/images/projects/tc-version1.png';
import TCV1_MIN from '../../../public/assets/images/projects/tc-version1-min.png';

import TCHOME from '../../../public/assets/images/projects/tc-home.png';
import MYPORTFOLIO from '../../../public/assets/images/projects/portfolio.png';
import MYPORTFOLIO_MIN from '../../../public/assets/images/projects/portfolio-min.png';

export const projectData: ProjectData[] = [
  // Project 1
  {
    name: 'Taipei Cuisine V2',
    content:
      'As an upgraded version of the Taipei Cuisine web application, the new release boasts improved error handling and enhanced user verification with JWT for increased security. The app also provides more ordering options, includes social login capabilities, features an overall improved design, and an updated and streamlined checkout process.',
    techStack: {
      frontend: ['NextJS', 'Typescript', 'Redux', 'Material UI', 'Firebase'],
      backend: [
        'Node',
        'Express',
        'Firebase Admin',
        'Cloud Function',
        'Nodemailer',
      ],
    },
    images: {
      original: TCV2,
      clip: TCHOME,
      minified: TCV2_MIN,
    },
    links: {
      github: 'https://github.com/XianFengWu1996/tc_demo_v2',
      demoUrl: 'https://tc-demo-v2.vercel.app',
    },
    alignImageLeft: true,
  },
  // Project 2
  {
    name: 'Taipei Cuisine V1',
    content:
      "I developed a full-stack web application that simplifies the ordering process for residents in the vicinity of the restaurant. This web app offers more customized options specific to the restaurant, unlike general food delivery platforms such as Uber or Doordash. However, due to the restaurant's closure, the web app is now available only as a demo.",
    techStack: {
      frontend: ['NextJS', 'Typescript', 'Redux', 'Material UI', 'Firebase'],
      backend: [
        'Node',
        'Express',
        'Firebase Admin',
        'Cloud Function',
        'Nodemailer',
      ],
    },
    images: {
      original: TCV1,
      clip: TCHOME,
      minified: TCV1_MIN,
    },
    links: {
      github: 'https://github.com/XianFengWu1996/taipeicuisine_nextjs',
      demoUrl: 'https://tc-demo-v1.vercel.app',
    },
    alignImageLeft: false,
  },
  {
    name: 'Portfolio',
    content:
      ' I created my portfolio web application using NextJS and Typescript. To streamline the development process and deepen my understanding of Tailwind, I utilized it for styling. All animations were written in-house with CSS and Javascript without any external packages. Additionally, the application is fully responsive on all devices.',
    techStack: {
      frontend: ['NextJS', 'Tailwind', 'CSS', 'Typescript'],
      backend: [],
    },
    images: {
      original: MYPORTFOLIO,
      minified: MYPORTFOLIO_MIN,
    },
    links: {
      github: 'https://github.com/XianFengWu1996/personal-portfolio',
    },
    alignImageLeft: true,
  },
];

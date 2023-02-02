import { StaticImageData } from 'next/image';
import TCV2 from '../../../public/assets/images/projects/tc-version2.png';
import TCHOME from '../../../public/assets/images/projects/tc-home.png';

type Alignment = 'right' | 'left';

interface ProjectData {
  name: string;
  content: string;
  frontend: string[];
  backend: string[];
  image: StaticImageData;
  clipImage: StaticImageData | null;
  imageAlignment: Alignment;
  contentAlignment: Alignment;
}

export const projectData: ProjectData[] = [
  // Project 1
  {
    name: 'Taipei Cuisine V2',
    content:
      'A full-stack web app for allowing the residents near the restaurant to have a simpler way to place order. The web app offer options more specific to the restaurant compare to platform such as Uber or Doordash where the options are more general. Unfortunately, the web app is just demo web app now.',
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
    imageAlignment: 'left',
    contentAlignment: 'right',
  },
  //   // Project 2
  //   {
  //     name: 'Taipei Cuisine V1',
  //     content: 'Content for project 2',
  //     frontend: ['NextJS', 'Typescript', 'Redux', 'Material UI', 'Firebase'],
  //     backend: [
  //       'Node',
  //       'Express',
  //       'Firebase Admin',
  //       'Cloud Function',
  //       'Nodemailer',
  //     ],
  //     image: TCV1,
  //     clipImage: TCHOME,
  //     imageAlignment: 'right',
  //     contentAlignment: 'left',
  //   },
];

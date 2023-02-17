import { IconType } from 'react-icons';
import { CgBrowser } from 'react-icons/cg';
import { FaNpm } from 'react-icons/fa';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { IoGameControllerOutline } from 'react-icons/io5';

export interface Expertise {
  name: string;
  Icon: IconType;
  skills: string[];
}

export const Expertises: Expertise[] = [
  {
    name: 'Web Development',
    Icon: CgBrowser,
    skills: [
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'NodeJS',
      'Express',
      'React',
      'NextJS',
    ],
  },
  {
    name: 'Mobile Development',
    Icon: HiOutlineDevicePhoneMobile,
    skills: ['Flutter', 'Dart', 'React Native'],
  },
  {
    name: 'Game Development',
    Icon: IoGameControllerOutline,
    skills: ['Unity', 'Unreal Engine', 'C#', 'C++'],
  },
];

export const packages: Expertise = {
  name: 'Packages, API & Other Languages',
  Icon: FaNpm,
  skills: [
    'Tailwind',
    'SCSS',
    'Material UI',
    'Google Cloud',
    'Firebase',
    'MongoDB',
    'Github',
    'D3.JS',
    'Stripe',
    'Square',
    'Twilio',
    'Nodemailer',
    'Google Maps',
    'Java',
    'Python',
    'Django',
    'PostgreSQL',
    'MySQL',
    'GraphQL',
    'Docker',
  ],
};

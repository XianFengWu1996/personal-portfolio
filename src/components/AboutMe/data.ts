interface TimeLine {
  date: string;
  title: string;
  content?: string;
  alignment: 'left' | 'right';
}

export const TimelineData: TimeLine[] = [
  {
    date: 'Sept 2018',
    title: 'First programming class',
    alignment: 'left',
    content:
      'During my junior year, I was first in contact with Java in an ISOM class. As I search for some coding courses online, Javascript is the first language I encounter and that is how everything started.',
  },
  {
    date: '2019',
    title: 'First Web Development Course',
    content:
      'In the beginning, I searched for courses and tutorials online and followed the videoes. But the information was too scattered then I   decided to take a full web development course on Udemy. After, I fell in love with coding and took more courses on NodeJS, ReactJS, and much more.',
    alignment: 'right',
  },
  {
    date: 'May 2020',

    title: 'Family Business',
    content:
      'When Covid first hits, my family restaurant needed help as the staff are leaving. I step in and fill in the spot. As the business slow down during the pandemic, I was able to code for a few hours in the afternoon also a few hours after work.',
    alignment: 'left',
  },
  {
    date: 'Aug 2020 - July 2022',
    title: 'Build a Mobile App',
    content:
      'During the time, I was task with build an mobile application for the restaurant. The first mobile application was launch in a couple months, I oversee the entire process of the designing, coding, and launching to App Store and Google Play Store. The project help me gain tons of knowledge on search for answer on Stack Overflow, locating bugs, and solid concept on OOP. The mobile was generating some traffic, but a web app seems more neccesary to make it more accessible to people on Google searches. Then I spend a couple months and created my first full-stack web application with React and NodeJS as the backend. ',
    alignment: 'right',
  },

  {
    date: 'Jan 2021 - Nov 2022',
    title: 'Build a Web App',
    content:
      'The mobile application was generating decent traffic, but a web app was more necessary to  Google searches. Then I spend a couple of months and created my first full-stack web application with React and NodeJS as the backend. As I receive some feedback from the customers and found that the code is messy and hard to maintain, I replace the entire application with the Taipei Cuisine V1. The application was much cleaner and maintainable with the help of Typescript. Version one of the application works, but as I progressed, the user interface and feature seem to lackluster. Which is why I started a new version, but ultimately my parent decided to retire and sold the restaurant in July. I manage to finish updating the basic features, and now both applications are now demo applications.',
    alignment: 'left',
  },
  {
    date: 'Jan 2023',
    title: 'Build my personal portfolio',
    content:
      "I had created a personal portfolio site before by following a tutorial. As I look back at the portfolio, it doesn't represent and show my capability, which is why I decide to put in more effort to update my portfolio. The application is made up of NextJS and Tailwind, the reasoning behind Tailwind is to make the coding process faster and but more importantly learn the framework.",
    alignment: 'right',
  },
  {
    date: 'In the future',
    title: 'Continue to Code',
    content:
      'Coding had become part of me. Bumping into errors and bugs can be frustrating from time to time, but fixing the problems one by one gives me a sense of accomplishment. I will continue to learn and create better applications in the future.',
    alignment: 'left',
  },
];

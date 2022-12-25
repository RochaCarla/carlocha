import {
  AiOutlineEnvironment,
  AiOutlineGithub,
  AiOutlineGitlab,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
import About from './about.md';
import Blog from './blog.md';
import Misc from './misc.md';
import Projects from './projects.md';
import Publications from './publications.md';
import Reading from './reading.md';
import Students from './students.md';
import Teaching from './teaching.md';

// const markdown = `Just a link: https://reactjs.com.`;

// const AboutComponent = () => {
//   const [content, setContent] = useState('');
//   console.log(content);

//   useEffect(() => {
//     import('./about.md').then((res) => {
//       fetch(res.default)
//         .then((r) => r.text())
//         .then((r) => setContent(r))
//         .catch((e) => console.log(e));
//     });
//   }, []);

//   return <ReactMarkdown>{content}</ReactMarkdown>;
// };

export const pages = [
  {
    element: <About />,
    path: '/',
    name: 'About',
  },
  {
    element: <Blog />,
    path: 'blog/',
    name: 'Blog',
  },
  {
    element: <Students />,
    path: 'students/',
    name: 'Students',
  },
  {
    element: <Teaching />,
    path: 'teaching/',
    name: 'Teaching',
  },
  {
    element: <Projects />,
    path: 'projects/',
    name: 'Projects',
  },
  {
    element: <Publications />,
    path: 'publications/',
    name: 'Publications',
  },
  {
    element: <Reading />,
    path: 'research/',
    name: 'Research',
  },
  {
    element: <Misc />,
    path: 'misc/',
    name: 'Misc',
  },
];

export const name = 'Carla Rocha';
export const description =
  'Software Engineering Professor & Researcher at the University of Brasília (UnB)';

export const interests = [
  'Diversity',
  'Agile development',
  'DevOps adoption',
  'MLOps',
  'Open Source community',
  'Project-Oriented teaching',
];

export const contacts = [
  {
    name: 'location',
    icon: <AiOutlineEnvironment size={24} />,
    text: 'University of Brasília, Brazil',
  },
  {
    name: 'email',
    icon: <AiOutlineMail size={24} />,
    text: 'caguiar@unb.br',
    link: 'mailto:caguiar@unb.br',
  },
  {
    name: 'gitlab',
    icon: <AiOutlineGitlab size={24} />,
    text: 'rocha.carla',
    link: 'https://gitlab.com/rocha.carla',
  },
  {
    name: 'github',
    icon: <AiOutlineGithub size={24} />,
    text: 'RochaCarla',
    link: 'https://github.com/RochaCarla',
  },
  {
    name: 'linkedin',
    icon: <AiOutlineLinkedin size={24} />,
    text: 'RochaCarla',
    link: 'https://www.linkedin.com/in/carla-rocha-a4287a19/',
  },
];

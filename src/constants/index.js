import { SiTailwindcss, SiJavascript, SiReact, SiC } from 'react-icons/si';

import {
    git,
    html,
    javascript,
    reactjs,
    tailwind,
    css,
    python,
    nodejs,
    flask,
    bash,
    express,
    mysql,
    simpleShell,
    testImage,
} from '../assets/';

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'python',
        icon: python,
    },
    {
        name: 'nodejs',
        icon: nodejs,
    },
    {
        name: 'bash',
        icon: bash,
    },
    {
        name: 'flask',
        icon: flask,
    },
    {
        name: 'expess js',
        icon: express,
    },
    {
        name: 'mySql',
        icon: mysql,
    },
];

const projects = [
    {
        title: 'Simple Shell',
        desc: 'A simple unix command line interpreter written fully in C.',
        techStack: [
            {
                name: 'C',
                icon: SiC,
            },
        ],
        link: 'https://github.com/m0nztrum/simple_shell',
        open: 'site for deployments',
        image: simpleShell,
    },
    {
        title: 'portfolio',
        desc: 'Personal portfolio website showcasing my skills and projects.',
        techStack: [
            {
                name: 'React js',
                icon: SiReact,
            },
            {
                icon: SiTailwindcss,
            },
            {
                icon: SiJavascript,
            },
        ],
        open: 'site for deployments',
        link: 'https://github.com/m0nztrum/portfolio',
        image: testImage,
    },
    {
        title: 'flyfare',
        desc: 'Web app to search for cheap flights',
        techStack: [
            {
                icon: SiReact,
            },
            {
                icon: SiTailwindcss,
            },
            {
                icon: SiJavascript,
            },
        ],
        open: 'deployed site',
        link: 'https://github.com/m0nztrum/flyfare',
        image: testImage,
    },
];

export { technologies, projects };

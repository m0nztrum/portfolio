import {
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiC,
    SiVite,
    SiExpress,
} from 'react-icons/si';

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
    m0nztrum,
    flyfair,
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
        githublink: 'https://github.com/m0nztrum/simple_shell',
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
            {
                icon: SiVite,
            },
        ],
        open: 'site for deployments',
        githublink: 'https://github.com/m0nztrum/portfolio',
        image: m0nztrum,
    },
    {
        title: 'flyfair',
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
            {
                icon: SiVite,
            },
            {
                icon: SiExpress,
            },
        ],
        open: 'deployed site',
        githublink: 'https://github.com/m0nztrum/flyfair',
        image: flyfair,
    },
];

const navItems = [
    { name: 'Intro', id: '#intro' },
    { name: 'About', id: '#about' },
    { name: 'Skills', id: '#skills' },
    { name: 'Projects', id: '#projects' },
    { name: 'Contact', id: '#contact' },
];

export { technologies, projects, navItems };

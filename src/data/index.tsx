import { House, Contact as ContactIcon, Briefcase, User } from 'lucide-react';
import { navItem } from '../types';

const navItems: navItem[] = [
    { name: 'Home', link: '#home', icon: <House /> },
    { name: 'About', link: '#about', icon: <User /> },
    { name: 'Skills', link: '#skills' },
    { name: 'Works', link: '#works', icon: <Briefcase /> },
    { name: 'Contact', link: '#contact', icon: <ContactIcon /> },
];

export { navItems };

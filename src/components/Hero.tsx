import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdArrowDownward } from 'react-icons/md';
import { motion } from 'framer-motion';

const socialLinks = [
    { href: 'https://github.com/m0nztrum', icon: <FaGithub />, label: 'GitHub' },
    {
        href: 'https://www.linkedin.com/in/elvis-fiador-563839226/',
        icon: <FaLinkedin />,
        label: 'LinkedIn',
    },
    {
        href: 'mailto:delafiado@gmail.com',
        icon: <FaEnvelope />,
        lable: 'Email',
    },
];

export const Hero = () => {
    const scrollToTechnologies = () => {
        const section = document.getElementById('skills');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn('Skill section not found');
        }
    };
    return (
        <div>
            <div
                className="relative flex flex-col items-center justify-center px-5 pb-20 pt-36 sm:h-screen sm:p-0 sm:px-10"
                id="home"
            >
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <p className="max-w-5xl text-center text-3xl font-bold leading-snug tracking-wide sm:text-4xl md:text-5xl">
                        Hey, my name is Elvis, I am a Full-Stack Developer.
                    </p>
                    <p className="pb-6 pt-5 text-xl text-dark-500 sm:text-base md:text-lg">
                        I love exploring and creating cool stuff 🚀
                    </p>
                    <div className="flex space-x-5">
                        {socialLinks.map(({ href, icon, label }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-dark-500 hover:text-zinc-50 md:text-3xl"
                                whileHover={{ y: -3 }}
                                title={label}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </div>
                    <motion.div className="mt-20">
                        <button onClick={scrollToTechnologies} aria-label="Scroll to technologies">
                            <MdArrowDownward className="animate-bounce text-4xl text-dark-600" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

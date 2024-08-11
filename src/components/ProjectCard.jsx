import PropTypes from 'prop-types';
import { createElement } from 'react';
import { githubImage } from '../assets';
import { motion } from 'framer-motion';

export const ProjectCard = ({ title, desc, techStack, githublink, image }) => {
    return (
        <motion.div
            className="rounded-2xl p-3 md:p-3 bg-neutral-900"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative w-full">
                <img
                    src={image}
                    alt={`${title}`}
                    className="w-full h-48 rounded-xl"
                    loading="lazy"
                />
                <div className="absolute inset-0 m-3 flex justify-end">
                    <div
                        onClick={() => window.open(githublink, '_blank')}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black"
                    >
                        <img
                            src={githubImage}
                            alt="gitrepo"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm">{desc}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <p
                        key={index}
                        className="text-white text-2xl pt-2 space-x-2"
                    >
                        {createElement(tech.icon)}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    githublink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
                .isRequired,
        }),
    ),
};

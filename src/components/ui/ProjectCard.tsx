import { ProjectCardProps } from '../../types';
import { motion } from 'framer-motion';
import { useState } from 'react';

const tooltipVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -5, transition: { duration: 0.3 } },
};

export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
    const { title, description, imageUrl, tags } = project;
    const [hoveredTagIndex, setHoveredTagIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number | null = null) => {
        setHoveredTagIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredTagIndex(null);
    };

    return (
        <motion.div
            className="relative mx-auto flex min-h-[450px] max-w-xs flex-col rounded-2xl bg-dark-200 p-4 text-dark-500 hover:bg-dark-300 sm:max-w-sm md:max-w-md lg:max-w-lg"
            initial="hidden"
            whileInView="visible"
            whileHover={{
                y: -7,
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    mass: 0.5,
                    duration: 0.1,
                },
            }}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={handleMouseLeave}
        >
            {/* Project Image */}
            <figure className="mb-3 flex-grow rounded-lg">
                <img
                    src={imageUrl}
                    alt={title}
                    className="aspect-square h-full w-full rounded-lg object-cover"
                />
            </figure>

            <div className="flex flex-grow flex-col justify-between">
                <div>
                    <h3 className="text-xl font-normal">{title}</h3>
                    <p className="mb-4 text-sm">{description}</p>
                    <div className="flex flex-wrap items-center gap-1">
                        {tags &&
                            tags.length > 0 &&
                            tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="group relative"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={tag.icon}
                                        className={`flex h-8 w-8 items-center rounded-lg ${tag.tagColor} px-1`}
                                    />
                                    <motion.div
                                        className="absolute left-1/2 top-full text-zinc-50"
                                        animate={hoveredTagIndex === index ? 'visible' : 'hidden'}
                                        initial={{ y: 0, x: '-50%' }}
                                        variants={tooltipVariants}
                                    >
                                        <div className="relative z-10 whitespace-nowrap rounded-md bg-dark-200 p-2 text-sm shadow-lg">
                                            {tag.tagName}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

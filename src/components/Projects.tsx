import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from './ui/ProjectCard';

export const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl py-32 md:h-screen"
            id="works"
        >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="text-3xl font-bold md:text-4xl">My Projects</h2>
            </div>
            <div className="mt-8 grid gap-x-3 gap-y-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </motion.div>
    );
};

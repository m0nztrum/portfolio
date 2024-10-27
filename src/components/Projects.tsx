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
            className="py-32"
            id="works"
        >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="text-3xl font-bold md:text-4xl">My Projects</h2>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </motion.div>
    );
};

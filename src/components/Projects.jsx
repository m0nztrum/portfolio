import { projects } from '../constants';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    return (
        <div id="projects" className="w-full h-screen">
            <div className="mx-auto px-8 h-full flex flex-col max-w-[1000px] pt-[50px]">
                {/* header for section */}
                <div className="flex w-full pb-[42px]">
                    <p className="text-5xl font-bold">Projects</p>
                </div>
                {/* projects showcase section */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

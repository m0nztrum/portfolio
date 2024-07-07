import { projects } from '../constants';

const ProjectCard = ({ title, desc, techStack, image }) => {
    return (
        <div className="rounded-2xl">
            <div className="relative">
                <img src={image} alt={`${title}`} className="w-full h-48" />
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm">{desc}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <p key={index} className="text-[14px]">
                        {tech.icon}
                    </p>
                ))}
            </div>
        </div>
    );
};
function Projects() {
    return (
        <div id="projects" className="w-full h-screen">
            <div className="mx-auto px-8">
                {/* header for section */}
                <div>
                    <p className="text-5xl font-bold">Projects</p>
                </div>
                {/* projects showcase section */}
                <div className="grid grid-cols-1 gap-7">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;

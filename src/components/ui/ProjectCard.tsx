import { ProjectCardProps } from '../../types';

export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
    const { title, description, techStack, imageUrl } = project;
    return (
        <div className="relative mx-auto flex min-h-[450px] max-w-xs flex-col rounded-2xl bg-dark-200 p-4 text-dark-500 sm:max-w-sm md:max-w-md lg:max-w-lg">
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
                    <div className="flex">
                        {techStack.map((tech, index) => (
                            <div key={index} className="inex">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

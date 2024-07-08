import { createElement } from 'react';

const ProjectCard = ({ title, desc, techStack, image }) => {
    return (
        // TODO: Find bettter colors
        <div className="rounded-2xl p-5 md:p-6 bg-gray-950 hover:scale-105 duration-500 transform">
            <div className="relative w-full">
                <img
                    src={image}
                    alt={`${title}`}
                    className="w-full h-48 rounded-xl"
                    loading="lazy"
                />
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm">{desc}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <p key={index} className="text-white text-lg pt-2">
                        {/* FIX: Make the icon larger" */}
                        {createElement(tech.icon)}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;

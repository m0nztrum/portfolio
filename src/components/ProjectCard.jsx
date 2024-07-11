import { createElement } from 'react';
import { githubImage } from '../assets';

const ProjectCard = ({ title, desc, techStack, githublink, image }) => {
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
                {/* TODO: Add one for deployed links */}
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
                        {/* TODO: Make the icon larger" */}
                        {createElement(tech.icon)}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;

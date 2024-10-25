import data from '../data/technologies.json';
import { SkillIcon } from './SkillIcon';

export const Skill = () => {
    const skillIconItems = data.currentTech;
    return (
        <div className="relative py-16 sm:py-24" id="skills z-10">
            <div className="mb-10 space-y-4">
                <h1 className="text-3xl font-bold min-[430px]:text-4xl md:text-5xl dark:text-stone-200">
                    Current Technologies
                </h1>
                <p className="text-sm">
                    I am proficient in a range of tools and technologies that that empower me to
                    build my projects.
                </p>
            </div>
            <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {skillIconItems.map((skillIconItem) => (
                    <SkillIcon key={skillIconItem.name} techInfo={skillIconItem} />
                ))}
            </div>
        </div>
    );
};
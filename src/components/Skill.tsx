import { currentTech } from '../data/technologies';
import { SkillIcon } from './ui/SkillIcon';
import { motion } from 'framer-motion';

export const Skill = () => {
    const skillIconItems = currentTech;
    return (
        <div className="relative z-10 mx-auto max-w-5xl py-16 sm:py-24" id="skills">
            <div className="mb-10 space-y-4">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-stone-200 min-[430px]:text-4xl md:text-5xl"
                    >
                        Current Technologies
                    </motion.h1>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: -90 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="max-w-lg text-sm text-dark-500 md:max-w-3xl"
                >
                    I am proficient in a range of tools and technologies that that empower me to
                    build my projects.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {skillIconItems.map((skillIconItem) => (
                    <SkillIcon key={skillIconItem.name} techInfo={skillIconItem} />
                ))}
            </div>
        </div>
    );
};

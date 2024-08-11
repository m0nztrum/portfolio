import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { SkillIcon } from './SkillIcon';

export const Skills = () => {
    return (
        <div id="skills" className="h-screen w-full">
            <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="inline text-5xl font-bold">Skills</p>
                    <p className="py-4 text-2xl">
                        These are the tools and technologies I have worked with
                    </p>
                </motion.div>

                <div className="grid w-full grid-cols-2 gap-5 text-center sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
                    {technologies.map((technology) => (
                        <SkillIcon
                            key={technology.name}
                            icon={technology.icon}
                            name={technology.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

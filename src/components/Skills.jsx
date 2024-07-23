import { technologies } from '../constants';
import { motion } from 'framer-motion';

const Skill = ({ icon, name }) => {
    return (
        <motion.div
            className="flex flex-col items-center space-y-4 m-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.5 }}
        >
            <img src={icon} alt={name} className="h-16 w-16" />
            <p className="mt-2 text-xl">{name}</p>
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <div id="skills" className="h-screen w-full">
            <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
                {/* section header */}
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
                        <Skill
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

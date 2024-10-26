import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <div>
            <div
                className="relative flex flex-col items-center justify-center pb-20 pt-36 sm:h-screen sm:p-0"
                id="home"
            >
                <div className="relative z-10 flex flex-col items-center justify-center text-center font-bold">
                    <p className="max-w-5xl text-center text-[40px] font-bold leading-snug tracking-wide md:text-6xl lg:text-7xl">
                        Hey, I&apos;m Elvis. Welcome to my side of the web.
                    </p>
                    <p className="pb-6 pt-5 text-xl text-dark-500 sm:text-base md:text-lg">
                        I love exploring and creating cool stuff 🚀
                    </p>
                    <div className="flex space-x-5">
                        <motion.a
                            href="https://github.com/m0nztrum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-dark-500 hover:text-zinc-50 md:text-3xl"
                            whileHover={{ y: -3 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://github.com/m0nztrum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-dark-500 hover:text-zinc-50 md:text-3xl"
                            whileHover={{ y: -3 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

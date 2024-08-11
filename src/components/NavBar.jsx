import { useState } from 'react';
import { navItems } from '../constants/';
import { motion } from 'framer-motion';

export const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav className="fixed top-0 z-50 w-full bg-black">
            <div className="container mx-auto flex items-center justify-between px-6 py-2">
                <motion.div
                    className="flex flex-grow justify-center space-x-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {navItems.map((navItem) => (
                        <motion.a
                            href={navItem.id}
                            key={`${navItem.id}`}
                            className={`font-bold ${activeNav === navItem.id ? 'text-neutral-600' : 'text-white'}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setActiveNav(navItem.id)}
                        >
                            {navItem.name}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </nav>
    );
};

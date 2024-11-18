import { motion } from 'framer-motion';

export const SkillIcon = ({
    techInfo,
}: {
    techInfo: { name: string; description: string; imageUrl: string; bgColor: string };
}) => {
    const { name, description, imageUrl, bgColor } = techInfo;
    const variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ y: -7, transition: { duration: 0.4 } }}
            className="flex flex-1 gap-5 rounded-xl border border-dark-200 bg-dark-200 p-2.5 transition-colors duration-200 hover:border-dark-300 hover:bg-dark-300"
        >
            <div className={`w-fit rounded-lg p-3 ${bgColor}`}>
                <img src={imageUrl} alt={`${name} logo`} className="size-8" />
            </div>
            <div>
                <h4 className="text-lg font-medium">{name}</h4>
                <p className="text-sm">{description}</p>
            </div>
        </motion.div>
    );
};

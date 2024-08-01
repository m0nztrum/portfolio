import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const SkillIcon = ({ icon, name }) => {
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

SkillIcon.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

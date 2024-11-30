import { Hero } from '../components/Hero';
import { Skill } from '../components/Skill';
import { Projects } from '../components/Projects';

export const HomePage = () => {
    return (
        <div>
            <Hero />
            <Skill />
            <Projects />
        </div>
    );
};

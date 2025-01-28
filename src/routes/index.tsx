import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '../components/Hero';
import { Skill } from '../components/Skill';
import { Projects } from '../components/Projects';

export const Route = createFileRoute('/')({
    component: HomePage,
});

function HomePage() {
    return (
        <div>
            <Hero />
            <Skill />
            <Projects />
        </div>
    );
}

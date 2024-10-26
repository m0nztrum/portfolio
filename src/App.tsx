import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Skill } from './components/Skill';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
    return (
        <main className="relative flex flex-col bg-dark-100 px-5 text-stone-200 sm:px-10">
            <div className="mx-auto w-full max-w-7xl">
                <Navbar />
                <Home />
                <Skill />
                <Projects />
                <Footer />
            </div>
        </main>
    );
}

export default App;

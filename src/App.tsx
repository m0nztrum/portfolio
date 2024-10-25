import { Navbar } from './components/Navbar';
import { Skill } from './components/Skill';

function App() {
    return (
        <main className="relative flex flex-col bg-dark-100 px-5 text-stone-200 sm:px-10">
            <div className="mx-auto w-full max-w-7xl">
                <Navbar />
                <Skill />
            </div>
        </main>
    );
}

export default App;

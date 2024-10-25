import { Navbar } from './components/Navbar';

function App() {
    return (
        <main className="relative flex flex-col bg-dark-100 px-5 text-stone-200 sm:px-10">
            <div className="mx-auto w-full max-w-7xl">
                <Navbar />
            </div>
        </main>
    );
}

export default App;

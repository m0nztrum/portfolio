import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skill } from './components/Skill';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
// import { ReactLenis } from 'lenis/react';

function App() {
    return (
        // {/* <ReactLenis root> */}
        <Router>
            <main className="relative flex flex-col px-5 text-stone-200 sm:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <Navbar />
                    <Routes>
                        {/* Homepage Route*/}
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Skill />
                                    <Projects />
                                </>
                            }
                        />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </main>
        </Router>
        // </ReactLenis>
    );
}

export default App;

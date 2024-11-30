import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

export const Layout = () => {
    return (
        <ReactLenis root>
            <main className="relative flex flex-col px-5 text-stone-200 sm:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </main>
        </ReactLenis>
    );
};

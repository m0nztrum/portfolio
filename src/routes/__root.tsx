import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Footer } from '../components/Footer';
import { ReactLenis } from 'lenis/react';
import { Navbar } from '../components/Navbar';

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
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
}

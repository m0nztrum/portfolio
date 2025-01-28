import { Link } from '@tanstack/react-router';

export const NotFound = () => {
    return (
        <div className="container flex min-h-screen items-center justify-center text-stone-200">
            <div className="relative flex items-center justify-center">
                <button className="absolute bottom-10 z-40 flex">
                    <Link to="/">Go Home</Link>
                </button>
            </div>
        </div>
    );
};

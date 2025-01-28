import { navItems } from '../data';
import { navItem } from '../types';
import { Link } from '@tanstack/react-router';

export const Navbar = () => {
    return (
        <nav className="transition-[opacity, transform, filter] fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-lg px-8 py-2 font-medium opacity-100 ring-1 ring-inset ring-dark-300 blur-0 backdrop-blur-2xl">
            {navItems.map((item: navItem, index: number) => (
                <div
                    key={index}
                    className="relative flex items-center space-x-1 text-neutral-50 hover:scale-x-110 hover:text-dark-accent hover:underline"
                >
                    {item.link.startsWith('#') ? (
                        //<a> tag to fix issues with ids #..
                        <a href={item.link}>{item.name}</a>
                    ) : (
                        //<NavLink> tag for route paths
                        <Link
                            to={item.link}
                            activeProps={{ className: 'font-semibold text-dark-accent' }}
                        >
                            {item.name}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
};

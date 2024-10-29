import { navItems } from '../data';
import { navItem } from '../types';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="transition-[opacity, transform, filter] fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-lg px-8 py-2 opacity-100 ring-1 ring-inset ring-dark-500 blur-0 backdrop-blur-2xl">
            {navItems.map((item: navItem, index: number) => (
                <div
                    key={index}
                    className="relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300"
                >
                    {item.link.startsWith('#') ? (
                        //<a> tag to fix issues with ids #..
                        <a href={item.link} className="font-medium">
                            {item.name}
                        </a>
                    ) : (
                        //<Link> tag for route paths
                        <Link to={item.link} className="font-medium">
                            {item.name}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
};

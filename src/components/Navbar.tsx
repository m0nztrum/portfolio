import { navItems } from '../data';
import { navItem } from '../types';
export const Navbar = () => {
    return (
        <nav className="fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-lg border border-dark-500 bg-dark-200 px-8 py-4">
            {navItems.map((item: navItem, index: number) => (
                <div
                    key={index}
                    className="relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300"
                >
                    {/* for mobile screen sizes */}
                    <a href={item.link} className="block sm:hidden">
                        {item.icon}
                    </a>
                    {/* for larger screen sizes */}
                    <a href={item.link} className="hidden font-medium sm:block">
                        {item.name}
                    </a>
                </div>
            ))}
        </nav>
    );
};

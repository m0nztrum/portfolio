import { navItems } from '../data';
import { navItem } from '../types';
export const Navbar = () => {
    return (
        <div className="fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-lg border border-dark-500 bg-dark-200 px-8 py-4">
            {navItems.map((navItem: navItem, index: number) => (
                <nav
                    key={index}
                    className="relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300"
                >
                    {/* for mobile screen sizes */}
                    <a className="block sm:hidden">{navItem.icon}</a>
                    {/* for larger screen sizes */}
                    <a href={navItem.link} className="hidden font-medium sm:block">
                        {navItem.name}
                    </a>
                </nav>
            ))}
        </div>
    );
};

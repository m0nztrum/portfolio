function NavBar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-black">
            <div className="container mx-auto flex items-center justify-between px-6 py-2">
                <div className="flex flex-grow justify-center space-x-8">
                    <a href="#intro" className="font-bold">
                        Intro
                    </a>
                    <a href="#about" className="font-bold" to="intro">
                        About
                    </a>
                    <a href="#skills" className="font-bold">
                        Skills
                    </a>
                    <a href="#projects" className="font-bold">
                        Projects
                    </a>
                    <a href="#contact" className="font-bold">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

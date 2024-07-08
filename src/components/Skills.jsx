import { technologies } from '../constants';

function Skills() {
    const Skill = ({ icon, name }) => {
        return (
            <div className="flex flex-col items-center transition-transform duration-150 hover:scale-125">
                <img src={icon} alt={name} className="h-16 w-16" />
                <p className="mt-2 text-xl">{name}</p>
            </div>
        );
    };

    return (
        <div id="skills" className="h-screen w-full">
            <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
                {/* section header */}
                <div>
                    <p className="inline text-5xl font-bold">Skills</p>
                    <p className="py-4 text-2xl">
                        These are the tools and technologies I have worked with
                    </p>
                </div>

                <div className="grid w-full grid-cols-2 gap-5 text-center sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
                    {technologies.map((technology) => (
                        <Skill
                            key={technology.name}
                            icon={technology.icon}
                            name={technology.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;

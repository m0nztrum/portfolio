import { TypeAnimation } from 'react-type-animation';

function Intro() {
    return (
        <div id="intro" className="h-screen w-full">
            <div className="mx-auto flex flex-col h-full max-w-[1000px] justify-center px-8">
                <p className="text-4xl">Hello, Its me</p>
                <h1 className="text-4xl font-bold">
                    <TypeAnimation
                        sequence={['Elvis']}
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <h2>And I am a Passionate Student Software Engineer</h2>
                <p className="font-bold">
                    I am interested in working on challenging web-based
                    applications or projects.
                </p>
            </div>
        </div>
    );
}

export default Intro;

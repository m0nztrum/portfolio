import { ReactTyped } from 'react-typed';
function Intro() {
    return (
        <div id="intro" className="h-screen w-full">
            <div className="mx-auto flex flex-col h-full max-w-[1000px] justify-center px-8">
                <p className="text-4xl">Hello, Its me</p>
                <h1 className="text-4xl font-extrabold">
                    {/* TODO: Create my very own*/}
                    <ReactTyped
                        strings={['Elvis']}
                        typeSpeed={100}
                        backDelay={70}
                        smartBackspace={true}
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

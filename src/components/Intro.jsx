import { ReactTyped } from 'react-typed';

export const Intro = () => {
    return (
        <div id="intro" className="h-screen w-full">
            <div className="mx-auto flex flex-col h-full max-w-[1000px] justify-center px-8">
                <p className="text-3xl">
                    <ReactTyped
                        strings={["Hey, It's me"]}
                        typeSpeed={60}
                        backSpeed={50}
                        smartBackspace={true}
                        showCursor={false}
                    />
                </p>
                <h1 className="text-4xl font-extrabold">
                    <ReactTyped
                        strings={['Elvis here']}
                        typeSpeed={50}
                        backSpeed={50}
                        smartBackspace={true}
                        showCursor={false}
                    />
                </h1>
                <p className="font-bold">
                    Student interested in Software engineering and Web
                    Development.
                </p>
            </div>
        </div>
    );
};

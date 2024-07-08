import { FaGithub } from 'react-icons/fa';

function Contact() {
    return (
        <div id="contact" className="w-full h-screen">
            <div className="mx-auto flex h-full px-8 max-w-[1000px] flex-col justify-center items-center">
                <p className="font-bold inline text-2xl mb-8">
                    Interested? Lets Connect!
                </p>
                <div className="p-4">
                    <a
                        href="https://github.com/m0nztrum"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={25} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;

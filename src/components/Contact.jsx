import { FaGithub } from 'react-icons/fa';

function Contact() {
    return (
        <div
            id="contact"
            className="w-full h-screen flex justify-center items-center p-4"
        >
            <div className="pb-8">
                <p className="font-bold inline">Interested? Lets Connect!</p>
                <div className="p-4">
                    <a>
                        <FaGithub size={25} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;

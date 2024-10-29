import { useState } from 'react';

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="relative flex flex-col items-center px-5 py-32 text-stone-200">
            <div className="mb-12">
                <h2 className="text-center text-4xl font-bold md:text-5xl">Get In Touch With Me</h2>
                <p className="mt-4 text-center text-dark-500 md:max-w-md">
                    Whether you have a question, want to start a project, or simply say hi, feel
                    free to reach out!
                </p>
            </div>
            <form className="w-full max-w-2xl space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-medium text-stone-400">
                            Name*
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            onChange={handleChange}
                            className="w-full rounded-md border border-dark-300 bg-dark-100 p-3 placeholder-gray-500 focus:border-stone-300 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-medium text-stone-400">
                            Email*
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@doe.com"
                            onChange={handleChange}
                            className="w-full rounded-md border border-dark-300 bg-dark-100 p-3 placeholder-gray-500 focus:border-stone-300 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 font-medium text-stone-400">
                        Message*
                    </label>
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        onChange={handleChange}
                        className="w-full rounded-md border border-dark-300 bg-dark-100 p-3 placeholder-gray-500 focus:border-stone-300 focus:outline-none"
                    />
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        type="submit"
                        className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition-transform duration-200 hover:bg-teal-600 active:scale-95"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

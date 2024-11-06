import { z } from 'zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { AlertCard } from './ui/AlertCard';

export const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const schemaValidation = z.object({
        name: z
            .string()
            .min(3, { message: 'Name must be at least 3 characters.' })
            .max(15, { message: 'Name must not exceed 15 characters.' }),
        email: z.string().min(1, { message: 'Email is required.' }).email('Invalid Email'),
        message: z
            .string()
            .min(20, { message: 'Message should be a minimum of 20 characters.' })
            .max(200, { message: 'Message must not exceed 200 characters.' }),
    });

    type FormData = z.infer<typeof schemaValidation>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schemaValidation),
    });

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = () => {
        if (!form.current) return;

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID as string,
                import.meta.env.VITE_TEMPLATE_ID as string,
                form.current,
                { publicKey: import.meta.env.VITE_PUBLIC_KEY as string },
            )
            .then(
                () => {
                    console.log('Email sent!');
                    setShowAlert(true);
                },
                (error) => {
                    console.log('Failed', error.text);
                },
            );
    };

    return (
        <div className="relative flex flex-col items-center px-5 py-32 text-stone-200">
            {showAlert && <AlertCard onClose={() => setShowAlert(false)} />}
            <div className="mb-12">
                <h2 className="text-center text-4xl font-bold md:text-5xl">Get In Touch With Me</h2>
                <p className="mt-4 text-center text-dark-500 md:max-w-md">
                    Whether you have a question, want to start a project, or simply say hi, feel
                    free to reach out!
                </p>
            </div>
            <form
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
                className="w-full max-w-2xl space-y-6"
            >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-medium text-stone-400">
                            Name*
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register('name')}
                            placeholder="John Doe"
                            className="w-full rounded-md border border-dark-300 bg-dark-100 p-3 placeholder-gray-500 focus:border-stone-300 focus:outline-none"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-medium text-stone-400">
                            Email*
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="john@doe.com"
                            className="w-full rounded-md border border-dark-300 bg-dark-100 p-3 placeholder-gray-500 focus:border-stone-300 focus:outline-none"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 font-medium text-stone-400">
                        Message*
                    </label>
                    <textarea
                        rows={5}
                        {...register('message')}
                        placeholder="Your Message"
                        className="w-full rounded-md border border-dark-300 bg-dark-100 p-3 placeholder-gray-500 focus:border-stone-300 focus:outline-none"
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        type="submit"
                        className="flex rounded-lg bg-dark-400 px-6 py-3 font-semibold text-white"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

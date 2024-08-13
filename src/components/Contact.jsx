import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { IoIosSend } from 'react-icons/io';

export const Contact = () => {
    const schemaValidation = z.object({
        user_name: z
            .string()
            .min(3, { message: 'Name must be at least 3 characters.' })
            .max(10, { message: 'Name must not exceed 10 characters.' }),
        user_email: z
            .string()
            .min(1, { message: 'Email is required.' })
            .email('Invalid Email.'),
        message: z
            .string()
            .min(20, { message: 'Message should be minimum 20 characters.' })
            .max(200, { message: 'Message can not exceed 120 characters.' }),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schemaValidation) });

    const form = useRef();

    const sendEmail = (data) => {
        console.log(data.user_name);
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                },
            )
            .then(
                () => {
                    console.log('SUCCESS');
                    alert(
                        `Dear ${data.user_name}! Your message has been sent. Thank you for taking time to look at my portfolio.`,
                    );
                },
                (error) => {
                    console.log('FAILED TO SEND', error.text);
                },
            );
    };

    return (
        <div id="contact" className="w-full py-16">
            <div className="mx-auto flex px-8 max-w-[1000px] flex-col justify-center items-center">
                <p className="font-bold inline text-2xl mb-8">
                    Interested? Lets Connect!
                </p>
                <form
                    className="w-full"
                    ref={form}
                    onSubmit={handleSubmit(sendEmail)}
                >
                    <FormInput
                        type="text"
                        id="user_name"
                        name="user_name"
                        label="Name"
                        placeholder="Enter your name"
                        register={register('user_name')}
                        errors={errors.user_name}
                    />

                    <FormInput
                        type="email"
                        id="user_email"
                        name="user_email"
                        label="Email"
                        placeholder="Enter your email"
                        register={register('user_email')}
                        errors={errors.user_email}
                    />
                    <FormTextArea
                        name="message"
                        placeholder="Enter your message"
                        register={register('message')}
                        errors={errors.message}
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="flex items-center sm:w-28 bg-neutral-900 pl-3 py-2 pr-5 rounded-md cursor-pointer hover:bg-neutral-800"
                        >
                            {<IoIosSend size={25} />} Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

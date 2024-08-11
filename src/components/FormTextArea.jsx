import Proptypes from 'prop-types';

export const FormTextArea = ({ name, placeholder, register, errors }) => {
    return (
        <div className="mb-5 w-full">
            <label htmlFor={name} className="font-semibold">
                Message
            </label>
            <div>
                <textarea
                    name={name}
                    rows={5}
                    placeholder={placeholder}
                    autoComplete="off"
                    {...register}
                    className="w-full p-3 rounded-md capitalize mt-2 text-slate-900"
                />
                {errors && (
                    <small className="text-red-500 block mt-1">
                        {errors.message}
                    </small>
                )}
            </div>
        </div>
    );
};

FormTextArea.propTypes = {
    name: Proptypes.string,
    placeholder: Proptypes.string,
    register: Proptypes.object,
    errors: Proptypes.object,
};

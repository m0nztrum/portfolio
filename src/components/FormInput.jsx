import Proptypes from 'prop-types';

export const FormInput = ({
    type = 'text',
    id,
    name,
    label,
    placeholder,
    register,
    errors,
}) => {
    return (
        <div className="mb-5 w-full">
            <label htmlFor={id} className="font-semibold">
                {label}
            </label>
            <div>
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    autoComplete="off"
                    {...register}
                    className="w-full p-3 rounded-md outline-none text-slate-900 bg-[#cbd5e1]"
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

FormInput.propTypes = {
    type: Proptypes.string,
    id: Proptypes.string,
    name: Proptypes.string,
    label: Proptypes.string,
    placeholder: Proptypes.string,
    register: Proptypes.object,
    errors: Proptypes.object,
};

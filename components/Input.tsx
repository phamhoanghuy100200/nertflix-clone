'use client'
import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';
interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                autoComplete={id}
                disabled={disabled}
                {...register(id, { required })}
                className="
                block rounded-md px-6 pt-6 pb-1 w-full text-md text-white 
                bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer
                "
                placeholder=""
            />
            <label htmlFor={id}
                className="
                absolute
                text-md
                text-zinc-400
                duration-150
                transform 
               -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            ">
                {label}
            </label>

        </div >
    );
}

export default Input;
import React, { FC } from 'react';

type PropsSearchInput = {
    callback: (value: string) => void
    placeholder?: string
}

const Input: FC<PropsSearchInput> = ({ callback, placeholder }) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        callback(event.currentTarget.value)

    return <input
        type={'text'}
        autoComplete={'on'}
        onChange={handleOnChange}
        placeholder={placeholder}
    />;
};

export default Input;

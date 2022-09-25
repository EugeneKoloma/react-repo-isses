import React, { FC } from 'react';

type PropsSearchButton = {
    onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void
    value: string
}

const Button: FC<PropsSearchButton> = ({ onClick, value }) => {
    return <button type={'button'} onClick={onClick}>{value}</button>;
};

export default React.memo(Button);

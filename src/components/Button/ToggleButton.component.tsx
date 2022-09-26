import React, { FC, useState } from 'react';

type Props = {
    onStateChanged: (state: boolean) => void
    value: string
    enabledColor?: string
}

const ToggleButtonComponent: FC<Props> = ({ enabledColor = 'bg-yellow-400', onStateChanged, value }) => {
    const [ enabled, setEnabled ] = useState<boolean>(true)

    const handleToggle = () => {
        setEnabled(!enabled)
        onStateChanged(!enabled)
    }

    return (
        <button
            className={`${enabled ? enabledColor : 'bg-gray-400'} rounded text-white mr-1 p-1`}
            onClick={handleToggle}
        >{value}</button>
    );
};

export default ToggleButtonComponent;

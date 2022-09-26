import React, { FC } from 'react';

type Props = {
    onClick: () => void
}

const FetchMoreButtonComponent: FC<Props> = ({ onClick }) => {
    return (
        <button
            type={'button'}
            className={'block mx-auto my-2 text-gray-600 italic font-[10px]'}
            onClick={onClick}
        >load more...</button>
    );
};

export default FetchMoreButtonComponent;

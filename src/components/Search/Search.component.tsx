import React, { FC, useCallback, useState } from 'react';
import ToggleButtonComponent from '../Button/ToggleButton.component';
import { useParams } from 'react-router-dom';
import { issuesQueryGen } from '../../utils/queryGenerator';

type Props = {
    onSearch: (value: string) => void
}

const Search: FC<Props> = ({ onSearch }) => {
    const [ searchValue, setSearchValue ] = useState<string>('')
    const [ isIssueOpen, setIsIssueOpen ] = useState<boolean>(true)
    const [ isIssueClosed, setIsIssueClosed ] = useState<boolean>(true)
    const { organization, repository } = useParams()

    const handleSearchClick = useCallback(() => {
        onSearch(issuesQueryGen({
            isOpen: isIssueOpen,
            isClosed: isIssueClosed,
            organization,
            repository,
            searchValue
        }))
    }, [ searchValue, isIssueOpen, isIssueClosed ])

    const handleOnSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    const handleEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearchClick()
        }
    }

    return (
        <div className={'flex items-center justify-center mb-4'}>
            <div className={'flex border-2 rounded py-1 px-1 mr-2'}>
                <input
                    onKeyUp={handleEnterClick}
                    className={'focus:outline-0'}
                    value={searchValue}
                    onChange={handleOnSearchChange}
                    placeholder={'Input search phrase...'}/>
                <ToggleButtonComponent value={'OPEN'} enabledColor={'bg-green-600'} onStateChanged={setIsIssueOpen}/>
                <ToggleButtonComponent value={'CLOSED'} enabledColor={'bg-purple-600'}
                                       onStateChanged={setIsIssueClosed}/>
            </div>
            <button
                className={'px-2 h-[32px] bg-blue-700 rounded-[12px] text-white'}
                type={'button'}
                onClick={handleSearchClick}
            >SEARCH
            </button>
        </div>
    );
};

export default Search;

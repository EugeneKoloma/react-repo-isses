import React, { useCallback, useState } from 'react';
import Input from '../components/Input/Input';
import SearchButton from '../components/Button/Button';
import useLazySearchIssues from '../hooks/useLazySearchIssues';
import IssuesList from '../components/Issues/IssuesList';

const HomePage = () => {
    const { searchIssues, data, loading, error } = useLazySearchIssues(15)
    const [ searchValue, setSearchValue ] = useState<string>('')

    const handleSearchClick = useCallback(() => {
        searchIssues(searchValue)
    }, [ searchValue ])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <div>
            <Input callback={setSearchValue} placeholder={'Input search...'}/>
            <SearchButton onClick={handleSearchClick} value={'Search'}/>
            <IssuesList data={data?.search.edges!}/>
        </div>
    );
};

export default HomePage;

import React, { useCallback, useEffect, useState } from 'react';
import useLazySearchIssues from '../../hooks/useLazySearchIssues';
import Search from '../Search/Search.component';
import IssuesListComponent from './IssuesList.component';

const IssuesComponent = () => {
    const { searchIssues, fetchMoreIssues, data, loading, error } = useLazySearchIssues(10)
    const [ endCursor, setEndCursor ] = useState<string | undefined>(undefined)
    const [ search, setSearch ] = useState<string>('')
    const [ canLoadMore, setCanLoadMore ] = useState<boolean>(false)

    const handleIssues = useCallback((value: string) => {
        setSearch(value)
        searchIssues(value)
    }, [ search ])

    const handleFetchMore = useCallback(() => {
        fetchMoreIssues(search, endCursor!)
    }, [ search, endCursor ])

    useEffect(() => {
        if (data) {
            const pageInfo = data.search.pageInfo
            setCanLoadMore(pageInfo.hasNextPage)
            setEndCursor(pageInfo.endCursor)
        }
    }, [ data?.search.pageInfo.hasNextPage ])

    return (
        <div>
            <Search onSearch={handleIssues}/>
            <IssuesListComponent
                data={data?.search.edges!}
                onFetchMore={handleFetchMore}
                canLoadMore={canLoadMore}
            />
            {!data && !loading &&
              <p className={'text-center text-gray-600 italic'}>Please enter phrase to find issues...</p>}
            {data?.search.edges.length === 0 &&
              <p className={'text-center text-gray-600 italic'}>Oops no issues found... Please type another phrase.</p>}
            {loading && <p className={'mx-auto text-center italic text-gray-600'}>Loading...</p>}
            {error &&
              <p className={'mx-auto text-center italic text-gray-600'}>Oops error occurred: {error.message}</p>}
        </div>
    );
};

export default IssuesComponent;

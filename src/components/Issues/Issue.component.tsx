import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetIssueInfo from '../../hooks/useGetIssueInfo';
import { IIssueExpanded } from '../../model/issue.interfaces';
import CommentsListComponent from '../Comments/CommentsList.component';
import IssueCard from './IssueCard.component';

const IssueComponent = () => {
    const { id: issueNumber, organization, repository } = useParams()
    const { data, loading, error, onFetchMore } = useGetIssueInfo(organization!, repository!, +issueNumber!)
    const [ issue, setIssue ] = useState<IIssueExpanded | null>(null)

    // --- For Comments ---
    const [ endCursor, setEndCursor ] = useState<string | undefined>(undefined)
    const [ canLoadMore, setCanLoadMore ] = useState<boolean>(false)

    const handleFetchMore = useCallback(() => {
        onFetchMore(endCursor!)
    }, [ endCursor, canLoadMore ]);


    useEffect(() => {
        if (data) {
            setIssue(data.repository.issue)
        }
    }, [ data ])

    useEffect(() => {
        if (data) {
            const pageInfo = data.repository.issue.comments.pageInfo
            setCanLoadMore(pageInfo.hasNextPage)
            setEndCursor(pageInfo.endCursor)
        }
    }, [ data?.repository.issue.comments.pageInfo ])

    return (
        <div className={'container px-4 m-auto'}>
            {loading && <p className={'mx-auto text-center italic text-gray-600'}>Loading...</p>}
            {error &&
              <p className={'mx-auto text-center italic text-gray-600'}>Oops error occurred: {error.message}</p>}
            {issue && (
                <>
                    <h2 className={'text-[32px] text-center mb-3'}>{issue.title}</h2>
                    <IssueCard issue={issue}/>
                    {issue.comments.edges.length > 0 && <CommentsListComponent
                      comments={issue.comments.edges}
                      onFetchMore={handleFetchMore}
                      canLoadMore={canLoadMore}
                    />}
                </>
            )}
        </div>
    );
};

export default IssueComponent;

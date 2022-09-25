import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetIssueInfo from '../hooks/useGetIssueInfo';
import { IIssueExpanded } from '../model/issue.interfaces';

const IssuePage = () => {
    const { id: issueNumber } = useParams()
    const { data, loading, error } = useGetIssueInfo(+issueNumber!)
    const [ issue, setIssue ] = useState<IIssueExpanded | null>(null)

    useEffect(() => {
        if (data) {
            setIssue(data.repository.issue)
        }
    }, [ data ])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {issue && (
                <>
                    <p>{issue.title}</p>
                </>
            )}
        </div>
    );
};

export default IssuePage;

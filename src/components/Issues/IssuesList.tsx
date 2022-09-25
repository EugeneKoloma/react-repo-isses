import React, { FC } from 'react';
import { IIssue } from '../../model/issue.interfaces';
import { INode } from '../../model/common.interfaces';
import IssuesListItem from './IssuesListItem';

type PropsIssuesList = {
    data: INode<IIssue>[]
}

const IssuesList: FC<PropsIssuesList> = ({ data }) => {
    return (
        <ul className={'list-none'}>
            {data && data.map(({ node: issue }) => (
                <IssuesListItem key={issue.number} issue={issue}/>
            ))}
        </ul>
    );
};

export default IssuesList;

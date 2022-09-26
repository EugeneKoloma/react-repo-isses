import React, { FC } from 'react';
import { IIssue } from '../../model/issue.interfaces';
import { INode } from '../../model/common.interfaces';
import IssuesListItemComponent from './IssuesListItem.component';
import FetchMoreButtonComponent from '../Button/FetchMoreButton.component';

type PropsIssuesList = {
    data: INode<IIssue>[]
    onFetchMore: () => void
    canLoadMore?: boolean
}

const IssuesListComponent: FC<PropsIssuesList> = ({
                                                      data,
                                                      onFetchMore,
                                                      canLoadMore,

                                                  }) => {

    return (
        <>
            <ul className={'flex flex-col items-center'}>
                {data && data.map(({ node: issue }) => (
                    <IssuesListItemComponent key={issue.number} issue={issue}/>
                ))}
            </ul>
            {data && canLoadMore && <FetchMoreButtonComponent onClick={onFetchMore}/>}
        </>
    );
};

export default IssuesListComponent;

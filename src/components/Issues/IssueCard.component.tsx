import React, { FC } from 'react';
import { IIssue, IIssueExpanded, ISSUE_STATE } from '../../model/issue.interfaces';

type Props = {
    issue: IIssueExpanded
}

const IssueCard: FC<Props> = ({ issue }) => {
    return (
        <div className={'container p-4 border rounded-[10px] mb-3'}>
            <div className={'flex items-center mb-2'}>
                            <span
                                className={`mr-2 ${issue.state === ISSUE_STATE.OPEN ? 'bg-green-600' : 'bg-purple-600'}
                rounded-[6px] px-1 py-[2px] text-[8px] text-white`}
                            >{issue.state}</span>
                <span className={'text-12px text-gray-400 italic'}>Created by:
                                <span className={'ml-2 underline'}>{issue.author.login}</span>
                            </span>
            </div>
            <p className={'text-[18px] font-bold mb-2'}>{issue.title}</p>
            <p className={'text-[14px] italic mb-3'}>&nbsp;&nbsp;&nbsp;&nbsp;{issue.body}</p>
            <span className={'text-12px text-gray-400 italic'}>Created at:
                <span className={'ml-2'}>{issue.createdAt}</span>
            </span>
        </div>
    );
};

export default IssueCard;

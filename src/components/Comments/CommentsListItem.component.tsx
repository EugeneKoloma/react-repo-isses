import React, { FC } from 'react';
import { IComment } from '../../model/issue.interfaces';

type Props = {
    comment: IComment
}

const CommentsListItem: FC<Props> = ({ comment }) => {
    const { body, author, createdAt } = comment
    return (
        <div className={'container border rounded-[10px] p-2 mb-2'}>
            <span className={'text-12px text-gray-400 italic'}>Author:
                <span className={'ml-2 underline'}>{author.login}</span>
            </span>
            <p className={'text-[14px] italic my-3'}>&nbsp;&nbsp;&nbsp;&nbsp;{body}</p>
            <span className={'text-[12px] text-gray-400 italic font-bold'}>Posted at:
                <span className={'text-12px text-gray-400 text-[10px] font-normal ml-1'}>{createdAt}</span>
            </span>
        </div>
    );
};

export default CommentsListItem;

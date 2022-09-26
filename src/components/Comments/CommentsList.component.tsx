import React, { FC } from 'react';
import { IComment } from '../../model/issue.interfaces';
import { INode } from '../../model/common.interfaces';
import CommentsListItem from './CommentsListItem.component';
import FetchMoreButtonComponent from '../Button/FetchMoreButton.component';

type Props = {
    comments: INode<IComment>[]
    onFetchMore: () => void
    canLoadMore?: boolean
}

const CommentsListComponent: FC<Props> = ({ comments, onFetchMore, canLoadMore }) => {
    return (
        <>
            <p className={'text-center italic text-gray-600 mb-3'}>****Comments****</p>
            {comments.map((comment, index) =>
                <CommentsListItem key={`comment-${index}`} comment={comment.node}/>
            )}
            {canLoadMore && <FetchMoreButtonComponent onClick={onFetchMore}/>}
        </>
    );
};

export default CommentsListComponent;

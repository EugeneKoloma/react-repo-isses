import React, { FC } from 'react';
import { IIssue, ISSUE_STATE } from '../../model/issue.interfaces';
import { useLocation, useNavigate } from 'react-router-dom';

type PropsIssuesItem = {
    issue: IIssue
}

const IssuesListItemComponent: FC<PropsIssuesItem> = ({ issue }) => {
    const { title, number, state } = issue
    const location = useLocation()
    const navigate = useNavigate()

    const handleItemClick = () => {
        navigate(location.pathname.replace('/issues', '') + `/issue/${number}`)
    }

    return (
        <li
            className={'w-full md:w-1/2 p-3 rounded-[20px] border shadow-md hover:scale-[105%] hover:cursor-pointer transition ease-in-out delay-150 md:mb-2'}
            onClick={handleItemClick}>
            <p
                className={'text-[16px] title overflow-hidden text-ellipsis'}>
                {title}
            </p>
            <span
                className={`${issue.state === ISSUE_STATE.OPEN ? 'bg-green-600' : 'bg-purple-600'}
                rounded-[6px] px-1 py-[2px] text-[8px] text-white`}
            >{state}</span>
        </li>
    );
};

export default IssuesListItemComponent;

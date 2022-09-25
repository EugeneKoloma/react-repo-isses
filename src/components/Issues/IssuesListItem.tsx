import React, { FC } from 'react';
import { IIssue } from '../../model/issue.interfaces';
import { useNavigate } from 'react-router-dom';

type PropsIssuesItem = {
    issue: IIssue
}

const IssuesListItem: FC<PropsIssuesItem> = ({ issue }) => {
    const { title, number, state } = issue
    const navigate = useNavigate()

    const handleItemClick = () => {
        navigate(`/issue/${number}`)
    }

    return (
        <li onClick={handleItemClick}>
            <p>{title}</p>
            <p>{state}</p>
        </li>
    );
};

export default IssuesListItem;

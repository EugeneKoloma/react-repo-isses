import { INode, IPageInfo } from './common.interfaces';

export enum ISSUE_STATE {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED'
}

export interface IActor {
    login: string
}

export interface IComment {
    author: IActor
    body: string
    createdAt: string
}

export interface IIssue {
    title: string
    number: number
    state: ISSUE_STATE
}

export interface IIssueExpanded extends IIssue {
    body: string
    createdAt: string
    author: IActor
    comments: {
        pageInfo: IPageInfo
        edges: INode<IComment>[]
    }
}

export interface IIssueResponseData {
    repository: {
        issue: IIssueExpanded
        __typename: string
    }
}

export interface IIssueVariables {
    organization?: string
    repo?: string
    number: number
    after?: string
}

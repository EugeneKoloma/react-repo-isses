import { INode } from './common.interfaces';

enum ISSUE_STATE {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED'
}

interface IActor {
    login: string
}

interface IComment {
    author: IActor
    body: string
    createdAt: string
}

interface IIssue {
    title: string
    number: number
    state: ISSUE_STATE
}

interface IIssueExpanded extends IIssue {
    body: string
    createdAt: string
    author: IActor
    comments: {
        edges: INode<IComment>[]
    }
}

interface IIssueResponseData {
    repository: {
        issue: IIssueExpanded
    }
}

interface IIssueVariables {
    number: number
}

export type { IIssue, IActor, IComment, IIssueExpanded, ISSUE_STATE, IIssueVariables, IIssueResponseData }

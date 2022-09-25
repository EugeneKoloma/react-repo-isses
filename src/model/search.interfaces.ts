import { INode } from './common.interfaces';
import { IIssue } from './issue.interfaces';

interface IPageInfo {
    hasNextPage: boolean
    endCursor: string
}

interface ISearchResponse {
    search: {
        pageInfo: IPageInfo
        edges: INode<IIssue>[]
    }
}

interface ISearchVariables {
    query: string
    first: number
    after?: string
}

export type { ISearchResponse, IPageInfo, ISearchVariables }

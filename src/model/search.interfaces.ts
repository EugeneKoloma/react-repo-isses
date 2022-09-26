import { INode, IPageInfo } from './common.interfaces';
import { IIssue } from './issue.interfaces';

interface ISearchResponse {
    search: {
        pageInfo: IPageInfo
        edges: INode<IIssue>[]
        __typename: string
    }
}

interface ISearchVariables {
    query: string
    first: number
    after?: string
}

export type { ISearchResponse, ISearchVariables }

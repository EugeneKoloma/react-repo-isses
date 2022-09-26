interface INode<T> {
    node: T
}

interface IPageInfo {
    hasNextPage: boolean
    endCursor: string
}

export type { INode, IPageInfo }

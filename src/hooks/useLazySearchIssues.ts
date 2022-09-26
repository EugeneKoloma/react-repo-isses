import { useLazyQuery } from '@apollo/client';
import { ISearchResponse, ISearchVariables } from '../model/search.interfaces';
import { SEARCH_ISSUES } from '../graphql/queries/search.queries';

const useLazySearchIssues = (limit = 20) => {
    const [ search, {
        data,
        loading,
        error,
        fetchMore
    } ] = useLazyQuery<ISearchResponse, ISearchVariables>(SEARCH_ISSUES)

    const searchIssues = (value: string) => {
        search({
            variables: {
                query: value,
                first: limit
            }
        }).catch(error => console.log(error.message))
    }

    const fetchMoreIssues = (value: string, cursor: string) => {
        fetchMore<ISearchResponse, ISearchVariables>({
            query: SEARCH_ISSUES,
            variables: {
                after: cursor,
                query: value,
                first: limit
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                const newPageInfo = fetchMoreResult.search.pageInfo
                const newEdges = fetchMoreResult.search.edges
                return {
                    search: {
                        pageInfo: { ...newPageInfo },
                        edges: [ ...prev.search.edges, ...newEdges ],
                        __typename: prev.search.__typename
                    }
                }
            }
        }).catch(error => console.log(error.message))
    }

    return { searchIssues, fetchMoreIssues, data, loading, error }
}

export default useLazySearchIssues

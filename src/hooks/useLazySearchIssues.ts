import { useLazyQuery } from '@apollo/client';
import { ISearchResponse, ISearchVariables } from '../model/search.interfaces';
import { SEARCH_ISSUES } from '../graphql/queries/search.queries';
import { SEARCH_QUERY_TEMPLATE } from '../utils/constants';
import { ISSUE_STATE } from '../model/issue.interfaces';

const useLazySearchIssues = (limit = 20) => {
    const [ search, { data, loading, error } ] = useLazyQuery<ISearchResponse, ISearchVariables>(SEARCH_ISSUES)

    const searchIssues = (value: string, state?: ISSUE_STATE) => {
        search({
            variables: {
                query: `${SEARCH_QUERY_TEMPLATE} \\"${value}\\" ${state && `is:${state}`}`,
                first: limit
            }
        }).catch(error => console.log(error.message()))
    }

    return { searchIssues, data, loading, error }
}

export default useLazySearchIssues

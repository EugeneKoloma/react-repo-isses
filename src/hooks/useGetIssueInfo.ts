import { useQuery } from '@apollo/client';
import { GET_ISSUE_BY_NUMBER } from '../graphql/queries/issue.queries';
import { IIssueExpanded, IIssueResponseData, IIssueVariables } from '../model/issue.interfaces';

const useGetIssueInfo = (issueNumber: number) => {
    const { data, loading, error } = useQuery<IIssueResponseData, IIssueVariables>(
        GET_ISSUE_BY_NUMBER,
        {
            variables: {
                number: issueNumber
            }
        }
    )

    return { data, loading, error }
}

export default useGetIssueInfo

import { useQuery } from '@apollo/client';
import { GET_ISSUE_BY_NUMBER } from '../graphql/queries/issue.queries';
import { IIssueResponseData, IIssueVariables } from '../model/issue.interfaces';

const useGetIssueInfo = (org: string, repo: string, issueNumber: number) => {
    const { data, loading, error, fetchMore } = useQuery<IIssueResponseData, IIssueVariables>(
        GET_ISSUE_BY_NUMBER,
        {
            variables: {
                organization: org,
                repo,
                number: issueNumber
            }
        }
    )

    const onFetchMore = (cursor: string) => {
        fetchMore<IIssueResponseData, IIssueVariables>({
            query: GET_ISSUE_BY_NUMBER,
            variables: {
                organization: org,
                repo,
                number: issueNumber,
                after: cursor
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                const newComments = fetchMoreResult.repository.issue.comments
                return {
                    repository: {
                        issue: {
                            ...prev.repository.issue,
                            comments: {
                                pageInfo: newComments.pageInfo,
                                edges: [
                                    ...prev.repository.issue.comments.edges,
                                    ...newComments.edges
                                ]
                            }
                        },
                        __typename: prev.repository.__typename
                    }
                }
            }
        }).then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return { data, loading, error, onFetchMore }
}

export default useGetIssueInfo

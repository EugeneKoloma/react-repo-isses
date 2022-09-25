import { gql } from '@apollo/client';

export const SEARCH_ISSUES = gql`
    query GetIssues($query: String!, $first: Int!, $after: String) {
        search(query: $query, first: $first, type: ISSUE, after: $after) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                node {
                    ... on Issue {
                        title
                        number
                        state
                    }
                }
            }
        }
    }
`

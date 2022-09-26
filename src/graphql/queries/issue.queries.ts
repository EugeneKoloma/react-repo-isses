import { gql } from '@apollo/client';

export const GET_ISSUE_BY_NUMBER = gql`
    fragment fragmentAuthor on User {
        login
    }

    query GetIssueByNumber($organization: String!, $repo: String!, $number: Int!, $after: String) {
        repository(owner: $organization, name: $repo) {
            issue(number: $number) {
                title
                body
                createdAt
                number
                state
                author {
                    ... fragmentAuthor
                }
                comments(first: 8, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            author {
                                ... fragmentAuthor
                            }
                            body
                            createdAt
                        }
                    }
                }
            }
        }
    }
`

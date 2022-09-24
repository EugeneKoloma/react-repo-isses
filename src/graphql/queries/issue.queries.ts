import { gql } from '@apollo/client';

export const GET_ISSUE_BY_NUMBER = gql`
    query GetIssueByNumber($number: Int!) {
        repository(owner: "facebook", name: "react") {
            issue(number: $number) {
                title
                body
                createdAt
                author {
                    ... on Actor {
                        login
                    }
                }
                comments(first: 5) {
                    edges {
                        node {
                            author {
                                ... on Actor {
                                    login
                                }
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

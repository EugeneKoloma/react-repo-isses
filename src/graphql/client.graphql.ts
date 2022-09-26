import { ApolloClient, ApolloLink, concat, gql, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            authorization: `Bearer ${process.env['REACT_APP_GITHUB_ACCESS_TOKEN']}` || null
        }
    }))

    return forward(operation)
})

const typeDefs = gql`
    type Request {
        id: ID!
        query: String!
        isOpen: Boolean
        isClosed: Boolean
    }

    extend type Query {
        getRecentlyRequested: [Request!]
    }
    
#    extend type Mutation {
#        addToRequests(request: Request): Request
#    }
`

export const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
    typeDefs
})

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client as apolloClient } from './graphql/client.graphql';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <ApolloProvider client={apolloClient}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>
);

import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';

import './components/font-awesome';
import { Footer } from './components/footer';
import { media } from './styled/media';
import { Routes } from './routes';

const client = new ApolloClient({ uri: '/graphql' });

console.log('hi');

client.query({ query: gql`{ currentUser { email }  }` })
  .then(result => console.log(result));

injectGlobal`
body { 
  font-weight: 400;
  font-size: 16px;
  color: #333333;
}

@media screen and (min-width: ${media.small}){
  body {
    font-size: 18px;
  }
}

body * {
  font-family: 'Lato', sans-serif;
}
`;

export const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <Routes />
      <Route component={Footer} />
    </div>
  </ApolloProvider>
);

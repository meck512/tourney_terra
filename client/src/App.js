import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';



import Home from "./pages/Home"

// Apollo
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});



const App = () => {


  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
        
          <Home />
      
      </BrowserRouter>
    </ApolloProvider >

  );

};

export default App;

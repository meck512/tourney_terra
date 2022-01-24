import React from "react";
import { useState } from 'react';

import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from "./pages/Home"
import UserProfile from './pages/UserProfile';
import SignUpForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

// MUI Imports
import { Box } from "@material-ui/core";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@material-ui/core/Dialog';

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

// MUI NavTabs
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


const App = () => {
  
  
// RETURN
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>

        <Home/>

    </BrowserRouter>
    </ApolloProvider >

  );

};

export default App;

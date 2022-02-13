import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home"
import MemberPortal from './pages/MemberPortal'
import Profile from './pages/Profile'
import searchResults from './components/searchResults';
import NoMatch from "./pages/NoMatch";

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
      <Router>



          <div className="container">
            <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/member-portal" component={MemberPortal} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/event-stub/:id" component={searchResults} />

              <Route component={NoMatch} />
            </Switch>
          </div>



      </Router>
    </ApolloProvider >

  );

};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';


import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home"
import LoginForm from './components/LoginForm';
import NoMatch404 from './pages/NoMatch404';
import EventSearch from './pages/EventSearch';
import UserProfile from './pages/UserProfile';
import SignupForm from './components/SignupForm';
import NavTabs from './components/nav';


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

        <div className="flex-column justify-flex-start min-100-vh">
          <Header />

          <div className="container">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignupForm} />
              <Route exact path="/profile/:username?" component={UserProfile} />
              <Route exact path="/thought/:id" component={Home} />
              <Route component={NoMatch404} />
            </Switch>

          </div>

          <Footer />

        </div>

      </Router>
    </ApolloProvider>
  );

};

export default App;

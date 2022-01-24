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
  const routes = ["/UserProfile", "/favorites"];

  // MUI Modals
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  // MUI NavTabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
// RETURN
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>

        <Route
          path="/"
          render={(history) => (
            <Box sx={{ width: '100%', backgroundColor: 'white', mb: 2 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              aria-label="nav tabs example"
              // Nav TEXT and HOVER Highlight Colors
              textColor="black"
              indicatorColor="black"
            >

              {/* Login */}
              <LinkTab label="Login" onClick={handleOpen} />
              <Dialog open={open} onClose={handleClose}>
                <LoginForm handleClose={handleClose} />
              </Dialog>

              {/* Sign-Up */}
              <LinkTab label="Sign-Up" onClick={handleOpen} />
              <Dialog open={open} onClose={handleClose}>
                <SignUpForm handleClose={handleClose} />
              </Dialog>

              {/* User Profile */}
              <LinkTab
                label="Profile"
                value={routes[0]}
                component={Link}
                href="/UserProfile"
                to={routes[0]}
              />

            </Tabs>
            </Box>

          )}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/UserProfile" component={UserProfile} />
          {/* <Route exact path="/profile/:username?" component={UserProfile} /> */}
        </Switch>

    </BrowserRouter>
    </ApolloProvider >

  );

};

export default App;

import React from 'react';

import { Grid } from '@mui/material';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import SearchForm from '../components/RegisterEvent';
import SearchResult from '../components/searchResults';
import RegisterEvent from '../components/RegisterEvent';


const Home = () => {
  return (
    <Grid container spacing={3}>

      <Grid item xs={6}>
        <LoginForm />
      </Grid>

      <Grid item xs={6}>
      <SignupForm />
      </Grid>

      <Grid item xs={6}>
      <RegisterEvent />
      </Grid>

      <Grid item xs={6}>
      <SearchForm />
      </Grid>

      <Grid item xs={6}>
      <SearchResult />
      </Grid>


    </Grid>
  );
}

export default Home;

import React from 'react';

import { Grid } from '@mui/material';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import SearchForm from '../components/AddEventForm';
import SearchResult from '../components/searchResults';
import AddEventForm from '../components/SearchTourneyTerra';


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
      <AddEventForm />
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

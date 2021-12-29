import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from '../components/ModalDialog';
import { Grid } from '@mui/material';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import SearchResult from '../components/searchResults';
import RegisterEvent from '../components/RegisterEvent';
import Form from '../components/REGISTEREVENT2';



const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <Grid container spacing={3}>

      <Grid item xs={6}>
        <LoginForm />
      </Grid>

      <Grid item xs={6}>
        <SignupForm />
      </Grid>

      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Register Event
        </Button>
        <ModalDialog open={open} handleClose={handleClose} />
      </Grid>

      <Grid item xs={6}>
        <RegisterEvent />
      </Grid>

      <Grid item xs={6}>
        <Form />
      </Grid>

      <Grid item xs={6}>
        <SearchResult />
      </Grid>


    </Grid>
  );
}

export default Home;

// REACT
import React from 'react';
import { useState } from 'react';


// MUI
import Button from '@material-ui/core/Button';
import ModalDialog from '../components/ModalDialog';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

import Paper from '@mui/material';
// import Image from '../assets/images/Untitled.png';
// FORMS (not highlighted because they are not rendered until clicked)
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import RegisterEventForm from '../components/RegisterEventForm';

// Components
import Nav from '../components/Nav';
import Header from '../components/Header.js';
import SearchApp from '../components/SearchApp/SearchApp';
import Footer from '../components/Footer';


const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};

const Home = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ flexGrow: 1 }} style={styles.paperContainer}>

      <Grid container spacing={5}>


        <Grid container item >
          <Nav />
        </Grid>

        <Grid  container item >
          <Header />
        </Grid>

        <Grid container item >
          <SearchApp />
        </Grid>

        <Grid container item >
          <Button variant="contained" color="secondary" onClick={handleOpen}>
            Register Event
          </Button>
          <ModalDialog open={open} handleClose={handleClose} />
        </Grid>



        <Grid container item >
          <Footer />
        </Grid>

      </Grid>

    </Box>
  );
}

export default Home;

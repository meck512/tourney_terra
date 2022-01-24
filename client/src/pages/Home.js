// REACT
import React from 'react';
import { useState } from 'react';

// MUI
import Button from '@material-ui/core/Button';
import ModalDialog from '../components/ModalDialog';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';


// FORMS (not highlighted because they are not rendered until clicked)
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import RegisterEventForm from '../components/RegisterEventForm';

// Components
import Header from '../components/Header.js';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

import SearchApp from '../components/SearchApp/SearchApp';

// Initial Homepage search component(basically category/type select category select) ....   Goal is: On search button submit, Search_Results page comes up where the user will see (most recently?)added events for that event type on right side of screen, with advanced search options on the left panel

import RenderEvents from '../components/SearchApp/RenderEvents'



// MAIN
const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // RETURN
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>


        <Grid container item spacing={3}>
          <Nav />
        </Grid>

        <Grid container item spacing={3}>
          <Header />
        </Grid>

        <Grid container item spacing={3}>
          <SearchApp />
        </Grid>

        <Grid container item spacing={3}>
          <Button variant="contained" color="secondary" onClick={handleOpen}>
            Register Event
          </Button>
          <ModalDialog open={open} handleClose={handleClose} />
        </Grid>

        <Grid container item spacing={3}>

        </Grid>

        <Grid container item spacing={3}>

        </Grid>

        <Grid container item spacing={3}>
          <Footer />
        </Grid>

      </Grid>
    </Box>
  );
}

export default Home;

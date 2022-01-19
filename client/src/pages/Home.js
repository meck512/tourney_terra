// REACT
import React from 'react';
import { useState } from 'react';

// MUI
import Button from '@material-ui/core/Button';
import ModalDialog from '../components/ModalDialog';
import { Grid } from '@mui/material';


// FORMS (not highlighted because they are not rendered until clicked)
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import RegisterEventForm from '../components/RegisterEventForm';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Initial Homepage search component(basically category/type select category select) ....   Goal is: On search button submit, Search_Results page comes up where the user will see (most recently?)added events for that event type on right side of screen, with advanced search options on the left panel
import SearchTourneyTerra from '../components/SearchTourneyTerra';
import RenderEvents from '../components/RenderEvents'



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

    <Grid container spacing={3}>

      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12} >
        <SearchTourneyTerra />
      </Grid>

      <Grid item xs={12} >
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Register Event
        </Button>
        <ModalDialog open={open} handleClose={handleClose} />
      </Grid>

      <Grid item xs={12}>
        
        <RenderEvents />
      </Grid>

      <Grid item xs={12} >
        <Footer />
      </Grid>

    </Grid>

  );
}

export default Home;

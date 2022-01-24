// REACT
import React from 'react';
import heroIMG from '../assets/images/TourneyTerra_Color_Long.jpg';

// import background from '../assets/images/stockallsportsimage.jpg';

// MUI
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Paper } from '@material-ui/core';



// MAIN
const Header = () => {


  // RETURN
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Paper >
        PURPOSE STATEMENT
          </Paper>
      </Grid>

      <Grid item xs={8}>
        <CardMedia
          component="img"
          image={heroIMG}
          alt="TourneyTerra Large Logo"
          height="350"
          title="Hero"
        />
      </Grid>

      <Grid item xs={2}>
        <Paper>USER INFO</Paper>
      </Grid>

    </Grid>
  );
};

export default Header;

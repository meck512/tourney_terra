// REACT
import React from 'react';
import heroIMG from '../assets/images/TourneyTerra_Black_Long.png';

// MUI
import CardMedia from '@mui/material/CardMedia';
import { Grid, Paper } from '@material-ui/core';

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",

  }
};


const Header = () => {



  return (
<div style={classes.root}>
    <Grid container >

     
        <Grid item xs={2}>
          <Paper style={classes.paper} >
            <p>PURPOSE STATEMENT</p>
          </Paper>
        </Grid>
   

  
        <Grid item xs={8}>

          <CardMedia
            component="img"
            image={heroIMG}
            alt="TourneyTerra Large Logo"
            title="Hero"
          />
        </Grid>
    

    
        <Grid item xs={2} >
          <Paper style={classes.paper}>
            <p>USER INFO</p>
          </Paper>
        </Grid>
    
    </Grid>
    </div>
  );
};

export default Header;

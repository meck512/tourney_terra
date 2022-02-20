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
    <div>
      <Grid container spacing={1}  >


        <Grid item xs>
          <Paper style={classes.paper} >
            <p>PURPOSE STATEMENT</p>
          </Paper>
        </Grid>



        <Grid item xs={6}>
 
            <CardMedia
              component="img"
              image={heroIMG}
              alt="TourneyTerra Large Logo"
              title="Hero"
            />
         
        </Grid>



        <Grid item xs >
          <Paper style={classes.paper}>
            <p>USER INFO</p>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
};

export default Header;

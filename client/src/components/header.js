// REACT
import React from 'react';
import heroIMG from '../assets/images/TourneyTerra_Color_Long.jpg';

// import background from '../assets/images/stockallsportsimage.jpg';

// MUI
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';


// MAIN
const Header = () => {


  // RETURN
  return (

    <Box sx={{ width: '100%' }}>

      <CardMedia
        component="img"
        image={heroIMG}
        alt="TourneyTerra Large Logo"
        height="350"
        title="Hero"
      />

    </Box>

  );
};

export default Header;

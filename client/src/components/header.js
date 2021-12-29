import React from 'react';
import heroIMG from '../assets/images/TourneyTerra_Color_Long.jpg';
import NavTabs from '../components/nav';

import ModalDialog from '../components/ModalDialog';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';



const Header = () => {

  return (

    <Box sx={{ width: '100%' }}>

      <NavTabs />
      
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


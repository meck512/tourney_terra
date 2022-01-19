import React from 'react';
import { AppBar, Container, Toolbar, Typography  } from '@material-ui/core';

const Footer = () => {

  return (


        
        <AppBar position="static" color="default">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2022 TourneyTerra
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>




  );
};

export default Footer;

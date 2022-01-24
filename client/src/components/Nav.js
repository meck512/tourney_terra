import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as logo } from '../assets/images/TourneyTerra_Icon_White.png'
import { SvgIcon, Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
   
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: 50,
      marginRight: '10px'
    }
  })
);

const Nav = () => {
    const classes = useStyles();
  return (


        
    <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          
          <Button color="secondary" className={classes.title}>
    

          <CardMedia
          className={classes.logo }
          component="img"
          image={logo}
          alt="TourneyTerra Icon"
        
          title="Icon"
        />

          </Button>

    

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  </Box>




  );
};

export default Nav;

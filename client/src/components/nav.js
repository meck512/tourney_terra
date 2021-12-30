import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { color } from '@mui/system';
import Button from '@mui/material/Button';

import Dialog from '@material-ui/core/Dialog';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm'

function LinkTab(props) {
  return (
    <Tab
      component="nav"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white' }}>


      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="nav tabs example"
        textColor="black"
        indicatorColor="black"
      >

        <LinkTab label="Login" href="/login" />
        <Dialog open={open} onClose={handleClose}>
          <LoginForm handleClose={handleClose}/>
        </Dialog>

        <LinkTab label="Sign-Up" href="/sign-up" onClick={handleOpen} />
        <Dialog open={open} onClose={handleClose}>
          <SignUpForm handleClose={handleClose}/>
        </Dialog>

        <LinkTab label="Search" href="/search" />

        <LinkTab label="Profile" href="/profile" />

        <LinkTab label="Contact" href="/contact" />

      </Tabs>
    </Box>
  );
}

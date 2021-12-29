import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { color } from '@mui/system';
import Button from '@mui/material/Button';

import ModalDialog from '../components/ModalDialog';

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

        <LinkTab label="Sign-Up" href="/sign-up" onClick={handleOpen} />
        <ModalDialog open={open} handleClose={handleClose} />

        <LinkTab label="Search" href="/search" />

        <LinkTab label="Profile" href="/profile" />

        <LinkTab label="Contact" href="/contact" />

      </Tabs>
    </Box>
  );
}

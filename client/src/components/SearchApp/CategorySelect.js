import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const CategorySelect = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)} >
          <ListItemText primary="Browse All" />
        </ListItemButton>

        <Divider />

        <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemText primary="Sports" />
        </ListItemButton>

        <Divider />

        <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemText primary="E-Sports" />
        </ListItemButton>

        <Divider />

        <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemText primary="Gambling/Bingo" />
        </ListItemButton>

        <Divider />

        <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
          <ListItemText primary="Cooking/Crafts" />
        </ListItemButton>

        <Divider />


      </List>




    </Box>
  );
}


export default CategorySelect;
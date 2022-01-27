// REACT
import React from 'react';

// MUI
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';



const sports = [
    'Archery',
    'Badminton',
    'Baseball',
    'Bjj',
    'Body-Building/Fitness/Bikini',
    'Bowling',
    'Boxing',
    'Cricket',
    'Cycling',
    'Darts',
    'Disc-Golf',
    'Fencing',
    'Figure-Skating',
    'Fishing',
    'Football',
    'Golf',
    'Gymnastics',
    'Ice Hockey',
    'Ice Skating',
    'Jet Skiing',
    'Judo',
    'Karate',
    'Kickboxing',
    'Muay Thai',
    'Pool',
    'Rock-Climbing',
    'Roller Skating',
    'Rugby Union 7s',
    'Rugby Union 15s',
    'Rugby',
    'Rugby (Tough/Flag)',
    'Running/Cross Country',
    'Sambo',
    'Skateboarding',
    'Skiing',
    'SnowBoarding',
    'Soccer',
    'Sumo Wrestling',
    'Surfing',
    'Swimming',
    'Table Tennis',
    'Taekwando',
    'Tennis',
    'Track and Field',
    'Volleyball',
    'Water-Skiing',
    'Weight Lifting',
    'Wrestling Freestyle',
    'Wrestling Greco Roman',
    'Wrestling Folk'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};





// MAIN
const SportsFilter = () => {

    const [searchInput, setSearchInput] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSearchInput(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };



    // RETURN
    return (

        <FormControl variant="filled" sx={{ m: 1, width: 175 }}>
            <InputLabel id="introSearch">Sports</InputLabel>
            <Select
                labelId="introSearch"
                id="introSearchID"
                multiple
                value={searchInput}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {sports.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={searchInput.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
};

export default SportsFilter;

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Paper, Typography } from '@mui/material';


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

function getStyles(name, searchInput, theme) {
    return {
        fontWeight:
            searchInput.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip() {
    const theme = useTheme();
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

    return (


        <Paper>
            <Typography variant='h3' align='center'>Search</Typography>


            <div align='center'>

                <FormControl sx={{ m: 1, width: 300 }}>
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
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, searchInput, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            
        </Paper>

    );
}

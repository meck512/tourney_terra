import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





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

const category = [
    'Sports',
    'E-Sports',
    'Gambling/BINGO',
    'Cooking/Crafts'
]

// const categories = [
//     'Sports',
//     'E-Sports',
//     'Gambling/BINGO',
//     'Cooking/Crafts'
// ]

const sport = [
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

]

function getStyles(category, categoryName, theme) {
    return {
        fontWeight:
            categoryName.indexOf(category) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
};


const SearchTourneyTerra = () => {
    const theme = useTheme();
    const [categoryName, setCategory] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategory(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <Box>
            <Card sx={{ width: '70%' }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        Search
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                            <option aria-label="None" value="" />
                            <optgroup label="Sports">
                                <option value={1}>Baseball</option>
                                <option value={2}>Rugby</option>
                            </optgroup>
                            <optgroup label="Cooking/Crafts">
                                <option value={3}>Baking</option>
                                <option value={4}>BBQ</option>
                            </optgroup>
                        </Select>
                    </FormControl>







                    <div>
                        <FormControl sx={{ m: 1, width: 300 }}>

                            <InputLabel id="demo-multiple-chip-label">
                                Category
                            </InputLabel>

                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={categoryName}
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

                                {category.map((category) => (
                                    <MenuItem
                                        key={category}
                                        value={category}
                                        style={getStyles(category, categoryName, theme)}
                                    >
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>


                        </FormControl>
                    </div>
                    {/* 
                    <div>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-chip-label">Sports
                            </InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={categoryName}
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
                                {sport.map((sport) => (
                                    <MenuItem
                                        key={sport}
                                        value={sport}
                                        style={getStyles(sport, categoryName, theme)}
                                    >
                                        {sport}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div> */}







                    <Typography variant="body2">
                        Category, subcatagory/sport, Location (google location or address input), Radius(defualt 100miles?),dates (pick between), age range, gender
                    </Typography>



                    <CardActions>
                        <Button variant="contained" size="large" color="primary">Search</Button>
                    </CardActions>

                </CardContent>
            </Card>
        </Box>
    );
}


export default SearchTourneyTerra;






// REACT
import React from 'react';
import heroIMG from '../../assets/images/TourneyTerra_Color_Long.png';

import DateFilter from './DateFilter';
import SingleEventCard from './SingleEventCard'


// MUI
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';
import { Chip } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';

// import Portal from '@mui/material/Portal';

import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.default,
}));

const classes = {
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 20,
        textAlign: "center",
        backgroundColor: "black",


    },
    searchappTheme: {
        padding: 20,
        textAlign: "center",

    }
};


const esportList = [
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

const cookingCraftList = [
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

const gamblingList = [
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


// MAIN
const SearchApp = () => {
    const sportsList = [
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

    const [show, setShow] = React.useState(false);

    const [value, setValue] = React.useState('all');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const container = React.useRef(null);
    const handleClick = () => {
        setShow(!show);
    };
    // RETURN
    return (
        <div style={classes.root}>
            <Grid container>

                <Grid item xs={2} >

                    <Paper sx={{ height: 800 }} style={classes.searchappTheme}>

                        <FormControl>
                            <FormLabel id="categorySelection"></FormLabel>

                            <Stack value={value} spacing={1}>
                                <Button control={<Stack />} label="all">Browse All</Button>
                                <Button onClick={handleClick} control={<Stack />} label="sports" >Sports</Button>
                                <Button control={<Stack />} label="esports" >E-Sports</Button>
                                <Button control={<Stack />} label="gam" >Gambling/Bingo</Button>
                                <Button control={<Stack />} label="cook" >Cooking/Crafts</Button>

                                <Button value={value} disabled>Disabled</Button>
                                {/* {show ? (
                                    <Portal container={container.current}>
                                        <Paper>
                                            {sportsList.map((sport) => (
                                                <Chip key={sport} label={sport} />
                                            ))}
                                        </Paper>
                                    </Portal>
                                ) : null} */}
                            </Stack>


                            <Paper sx={{ my: 2, mx: 2, color: 'white' }}>
                                <DateFilter />
                            </Paper>



                            <Button type="submit" variant="contained" color="primary">Search</Button>
                        </FormControl>

                    </Paper>
                </Grid>

                <Grid xs>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <SingleEventCard />
                    </Grid>

                </Grid>

            </Grid>

        </div >


    );
};

export default SearchApp;

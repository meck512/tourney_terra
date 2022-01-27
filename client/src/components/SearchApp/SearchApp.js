// REACT
import React from 'react';

import SportsFilter from './SportsFilter';
import EsportsFilter from './EsportsFilter';
import GamblingFilter from './GamblingFilter';
import CookingCraftsFilter from './CookingCraftsFilter';
import DateFilter from './DateFilter';
import RenderEvents from './RenderEvents';

import CategorySelect from './CategorySelect';

// MUI
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.default,
}));

const classes = {
    root: {
        flexGrow: 1
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
// MAIN
const SearchApp = () => {



    // RETURN
    return (
        <div style={classes.root}>
            <Grid container spacing={1}>

                <Grid item xs={2} >

                    <Paper sx={{ height: 800 }} style={classes.searchappTheme}>
                        
                        <CategorySelect />
                        
                        
                        <SportsFilter />
                        <EsportsFilter />
                        <GamblingFilter />
                        <CookingCraftsFilter />
                        <DateFilter />
                        {/* <Stack spacing={1}>
                        <Item>
                            <SportsFilter />
                        </Item>

                        <Item>
                            <EsportsFilter />
                        </Item>

                        <Item>
                            <GamblingFilter />
                        </Item>

                        <Item>
                            <CookingCraftsFilter />
                        </Item>

                        <Item>
                            <DateFilter />
                        </Item>

                        <Item>
                            Divisions/Gender
                        </Item>

                    </Stack> */}
                    </Paper>
                </Grid>

                <Grid xs={8}>

                    <Stack spacing={1}>

                        <Item>
                            <Stack direction="row" spacing={1}>
                                <Item sx={{ width: '20%' }} style={classes.paper}>HOW TO</Item>
                                <Item sx={{ width: '20%' }} style={classes.paper}>Active Type Filters many</Item>
                                <Item sx={{ width: '20%' }} style={classes.paper}>Active Location Filter 1</Item>
                                <Item sx={{ width: '20%' }} style={classes.paper}>Active Date Filter 1</Item>
                                <Item sx={{ width: '20%' }} style={classes.paper}>Active Division Filters many</Item>
                            </Stack>
                        </Item>

                        <Item>
                            <RenderEvents />
                        </Item>

                    </Stack>

                </Grid>





            </Grid>

        </div>


    );
};

export default SearchApp;

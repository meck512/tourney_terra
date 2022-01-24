// REACT
import React from 'react';

import SportsFilter from './SportsFilter';
import EsportsFilter from './EsportsFilter';
import GamblingFilter from './GamblingFilter';
import CookingCraftsFilter from './CookingCraftsFilter';
import DateFilter from './DateFilter';
import RenderEvents from './RenderEvents';
// MUI

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Divider from "@mui/material/Divider";

import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


// MAIN
const SearchApp = () => {


    // CATEGORY LIST SELECT
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    // RETURN
    return (

        <Grid container spacing={0} >

            <Grid item xs={2} >
                <Paper sx={{ height: 800 }}>

                    <Stack spacing={1}>
                        <Item>
                            <SportsFilter />
                            <EsportsFilter />
                            <GamblingFilter />
                            <CookingCraftsFilter />
                            <Divider />
                        </Item>

                        <Item>
                            <DateFilter />
                        </Item>

                        <Item>
                            Divisions/Gender
                        </Item>

                    </Stack>
                </Paper>
            </Grid>

            <Grid xs={8}>
            <Paper sx={{ height: 800 }}>
                <Stack spacing={0}>

                    <Item>
                        <Stack direction="row" spacing={2}>
                            <Item>LOGO</Item>
                            <Item>Types</Item>
                            <Item>Location/Date</Item>
                            <Item>Divisions/Gender</Item>
                        </Stack>
                    </Item>

                    <Item>
                        <RenderEvents />
                    </Item>

                </Stack>
                </Paper>
            </Grid>

            



        </Grid>




    );
};

export default SearchApp;

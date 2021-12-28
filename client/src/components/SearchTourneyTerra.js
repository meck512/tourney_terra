import * as React from 'react';
import MultipleSelectChip from './DivisionSelect';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SearchTourneyTerra = () => {

    return (
    <Box>
        <Card>
            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    Search TourneyTerra
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Search By:
                    Category, subcatagory/sport, Location (google location or address input), Radius(defualt 100miles?),dates (pick between), age range, gender
                </Typography>

            </CardContent>

            <CardActions>
                <Button size="large">Search</Button>
            </CardActions>

        </Card>
    </Box>
    );
}


export default SearchTourneyTerra;
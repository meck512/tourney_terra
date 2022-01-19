// REACT
import * as React from 'react';

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core';

// Assets
import rugbySTOCK from '../assets/images/rugbySTOCK.jpg'
import background from '../assets/images/ttbg (black).png'
// MAIN
const SearchResult = () => {
    return (
        <Box >
        <Card sx={{ maxWidth: 400, my: 3 }}>
            <CardMedia
                component="img"
                height="150"
                image={rugbySTOCK}
                alt="temporary"
            
            />
            <CardContent align='center' image='background'>
                <Typography gutterBottom variant="h5" component="div">
                    Cleveland Rock 'N' Roll Sevens Rugby Tournament
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    July 17th, 2021
                    <br/ ><br/ >
                    8809 Lake Roa, Seville, Ohio 44273
                    <br/ ><br/ >
                    Registration opens July 20th, $5 door fee for players and spectators
                    <br/ ><br/ >
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Save</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Box>
    );
}


export default SearchResult;
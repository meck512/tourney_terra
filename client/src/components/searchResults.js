import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import rugbySTOCK from '../assets/images/rugbySTOCK.jpg'

const SearchResult = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={rugbySTOCK}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cleveland Rock 'N' Roll Sevens Rugby Tournament
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Date: July 17th, 2021
                    <br/ ><br/ >

                    Men's & Women's Open & Social Divisions
                    Boy's & Girl's High School Divisions
                    <br/ ><br/ >

                    

                    VENUE North Coast Premier Soccer Complex
                    <br/ ><br/ >

                    ADDRESS 8809 Lake Roa, Seville, Ohio 44273
                
                    <br/ ><br/ >
                    DETAILS Registration opens July 20th, $5 door fee for players and spectators
                    <br/ ><br/ >

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Save</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}


export default SearchResult;
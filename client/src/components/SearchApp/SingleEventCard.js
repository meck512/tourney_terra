import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Grid } from '@mui/material';

import cardBG from '../../assets/images/ttbgblack.png'





const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1607&q=80',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1485400031595-976c74cf4e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
    {
        img: 'https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'LOREM IPSUM Tournament',
        date: '1/1/2023',
        location: 'Cleveland',
        author: '@Mariah',
    },
];

const styles = {
    paperContainer: {
        backgroundColor: 'black',
       
    }
};


const EventCard = () => {
    return (
        <Grid item>
            {itemData.map((item) => (
                <Card style={styles.paperContainer} sx={{ maxWidth: 345, my: 2, mx: 2 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.img}
                        alt="green iguana"
                        loading="lazy"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.default">
                        {item.date}
                        </Typography>
                        <Typography variant="body2" color="text.default">
                        {item.location}
                        </Typography>
                        <Typography variant="body2" color="text.default">
                        {item.author}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">View Details</Button>
                    </CardActions>
                </Card>
            ))
            }
        </Grid>
    );
}

export default EventCard;
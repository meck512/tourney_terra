import * as React from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import rugbySTOCK from '../assets/images/rugbySTOCK.jpg';
import { QUERY_USERS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';


const SearchResult = props => {
    const { id: userId } = useParams();
    const { loading, data } = useQuery(QUERY_USERS, {
        variables: { id: userId }
    });

    const users = data?.users || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div>

            {users &&
                users.map(users => (
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
                                USERNAME: {users.username}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                EMAIL: {users.email}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                ID: {users._id}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Save</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}


        </div>
)}


export default SearchResult;
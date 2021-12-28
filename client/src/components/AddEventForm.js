import * as React from 'react';
import MultipleSelectChip from './DivisionSelect';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AddEventForm = () => {
    const [value, setValue] = React.useState('Registration Deadline, Cost at Door...');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off">
            <Card>
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        Add Event Form
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <TextField id="outlined-basic" label="Event Title" variant="outlined" />
                        <br /><br />
                        <TextField id="outlined-basic" label="Date****" variant="outlined" />
                        <br /><br />
                        <TextField id="outlined-basic" label="Time****" variant="outlined" />
                        <br /><br />
                        Divisions:{MultipleSelectChip}
                        <br /><br />
                        <TextField id="outlined-basic" label=" Venue" variant="outlined" />
                        <br /><br />
                        <TextField id="outlined-basic" label="Address" variant="outlined" />
                        <br /><br />
                        <TextField id="outlined-basic" label="Event Link" variant="outlined" />
                        <br /><br />
                        <TextField id="outlined-basic" label="Image URL****" variant="outlined" />
                        <br /><br />
                        <div>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Details"
                                multiline
                                rows={4}
                                maxRows={8}
                                value={value}
                                onChange={handleChange}
                            /> </div>
                    </Typography>

                </CardContent>

                <CardActions>
                    <Button size="large">Search</Button>
                </CardActions>

            </Card>
        </Box>
    );
}


export default AddEventForm;
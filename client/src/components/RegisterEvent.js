import React, { useState } from 'react';

import MultipleSelectChip from './DivisionSelect';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RegisterEvent = () => {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [link, setlink] = useState("")
    const [image, setImage] = useState("")
    const [details, setDetails] = useState("")


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
                        <TextField
                            id="name"
                            label="Event Title"
                            variant="outlined"
                            onChange={handleChange} />
                        <br /><br />

                        <TextField
                            id="date"
                            label="Date"
                            variant="outlined" />
                        <br /><br />

                        <TextField
                            id="time"
                            label="Time"
                            variant="outlined" />
                        <br /><br />

                        Divisions:{MultipleSelectChip}
                        <br /><br />

                        <TextField
                            id="venue"
                            label="Venue"
                            variant="outlined" />
                        <br /><br />

                        <TextField
                            id="address"
                            label="Address"
                            variant="outlined" />
                        <br /><br />

                        <TextField
                            id="link"
                            label="Event Link"
                            variant="outlined" />
                        <br /><br />

                        <TextField
                            id="image"
                            label="Image URL"
                            variant="outlined" />
                        <br /><br />

                        <TextField
                            id="details"
                            label="Details"
                            multiline
                            rows={4}
                            maxRows={8}
                            value="{value}"
                            onChange={handleChange}
                        />



                    </Typography>

                </CardContent>

                <CardActions>
                    <Button size="large">Submit</Button>
                </CardActions>




            </Card>



        </Box>
    );
}


export default RegisterEvent;
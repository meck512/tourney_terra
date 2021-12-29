import React from 'react';

import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        background: 'white',

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const Form = ({ handleClose }) => {
    const classes = useStyles();
    const { handleSubmit, control } = useForm();

    const onSubmit = data => {
        console.log(data)
        alert(JSON.stringify(data));
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label="Event Title"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />

            <Controller
                name="date"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label="Date"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />

            <Controller
                name="time"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label="Time"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />

            <Controller
                name="location"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label="Location"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />

            <Controller
                name="link"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label="Link"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />

            <Controller
                name="image"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label="Image"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />

            <Controller
                name="details"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label="Details"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />


            <div>
                <Button variant="outlined" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </div>



        </form>
    );
};

export default Form;
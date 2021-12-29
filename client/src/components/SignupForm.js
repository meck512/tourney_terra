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

const SignUpForm = ({ handleClose1 }) => {
    const classes = useStyles();
    const { handleSubmit1, control } = useForm();

    const onSubmit = data => {
        console.log(data)
        alert(JSON.stringify(data));
    };

    return (
      <form className={classes.root} onSubmit={handleSubmit1(onSubmit)}>
			<Controller
				name="firstName"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="First Name"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
					/>
				)}
				rules={{ required: 'First name required' }}
			/>
			<Controller
				name="lastName"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Last Name"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
					/>
				)}
				rules={{ required: 'Last name required' }}
			/>
			<Controller
				name="email"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Email"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="email"
					/>
				)}
				rules={{ required: 'Email required' }}
			/>
			<Controller
				name="password"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Password"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="password"
					/>
				)}
				rules={{ required: 'Password required' }}
			/>
			<div>
				<Button variant="contained" onClick={handleClose1}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Signup
				</Button>
			</div>
		</form>
    );
};

export default SignUpForm;
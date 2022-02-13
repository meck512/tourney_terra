import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#97d700',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#e10098',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
    success: {
      main: '#002bff',
    },
    info: {
      main: '#330072',
    },
    error: {
      main: '#ff1000',
    },
    divider: '#fafafa',
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightMedium: 700,
    fontWeightBold: 800,
    fontWeightRegular: 500,
  },
  shape: {
    borderRadius: 15,
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },

  },
});

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
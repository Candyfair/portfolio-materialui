import { createTheme } from '@mui/material/styles';

// MaterialUI - theme definition
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6191AE',
    },
    secondary: {
      main: '#005B98',
    },
    success: {
      main: '#038883',
    },
    background: {
      paper: '#9FCBB0',
      default: '#F8F7F1',
    },
  },
  typography: {
    fontFamily: [
      'Degular',
      'sans-serif',
      'Apparat',
    ].join(','),
  },
  custom: {
    shadow: {
      primary: '2px 12px 30px rgba(88, 88, 88, 0.13)',
    },
  },
});

export default theme;

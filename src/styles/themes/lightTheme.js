import { createTheme } from '@mui/material/styles';

// MaterialUI - theme definition
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#70357B',
    },
    secondary: {
      main: '#E65824',
    },
    success: {
      main: '#4E9A51',
    },
    background: {
      paper: '#9FCBB0',
      default: '#F8F7F1',
    },
  },
  custom: {
    shadow: {
      primary: '2px 12px 30px rgba(88, 88, 88, 0.13)',
    },
  },
});

export default theme;

// == Import
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'; // Equivalent to reset.css

import Layout from 'src/components/Layout';
import ScrollTop from 'src/components/ScrollTop';
import theme from './styles/themes/lightTheme';

// == Composant
const App = () => (
  <ThemeProvider theme={theme}>
    <div className="app">
      <CssBaseline />
      <ScrollTop />
      <Layout />
    </div>
  </ThemeProvider>
);

// == Export
export default App;

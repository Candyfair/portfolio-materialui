// == Import
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'; // Equivalent to reset.css

import Layout from 'src/components/Layout';
import ScrollTop from 'src/components/ScrollTop';

import {
  Home,
  Portfolio,
  About,
} from './pages';

import theme from './styles/themes/lightTheme';

// == Composant
const App = () => (
  <ThemeProvider theme={theme}>
    <div className="app">
      <CssBaseline />
      <ScrollTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  </ThemeProvider>
);

// == Export
export default App;

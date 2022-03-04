// == Import
import { Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@mui/material'; // Equivalent to reset.css
import { ThemeProvider } from '@mui/material/styles';

import Layout from 'src/components/Layout';
import ScrollTop from 'src/components/ScrollTop';
import ModalDisplay from 'src/components/ModalDisplay';

import {
  Home,
  MySkills,
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
          <Route path="/skills" element={<MySkills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ModalDisplay />
      </Layout>
    </div>
  </ThemeProvider>
);

// == Export
export default App;

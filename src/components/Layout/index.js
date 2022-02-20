// === IMPORTS
import PropTypes from 'prop-types';

import { Stack, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import NavBarMobile from 'src/components/NavBarMobile';
import TopMenu from 'src/components/TopMenu';
import Footer from 'src/components/Footer';

// === MUI
const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
  pages: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(8),
    },
  },
  navbarMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  footer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

// === COMPONENT
const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Stack className={classes.layout}>
      <Box>
        <TopMenu />
      </Box>
      <Box className={classes.pages}>
        {children}
      </Box>

      {/* Navigation menu for mobile */}
      <Box className={classes.navbarMobile}>
        <NavBarMobile />
      </Box>

      {/* Footer for desktop */}
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </Stack>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

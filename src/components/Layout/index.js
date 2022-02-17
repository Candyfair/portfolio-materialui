// === IMPORTS
import { Stack, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import NavBarMobile from 'src/components/NavBarMobile';
import TopMenu from 'src/components/TopMenu';

// === MUI
const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
  pages: {
    flexGrow: 1,
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
      <Box>
        <NavBarMobile />
      </Box>
    </Stack>
  );
};

export default Layout;

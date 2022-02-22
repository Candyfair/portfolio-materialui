// === IMPORTS
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { Stack, AppBar, Box } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import TopMenuOffset from 'src/components/TopMenu/TopMenuOffset';
import NavBar from 'src/components/NavBar';
import ElevationScroll from 'src/utils/utils';

import logo from '../../assets/images/logo.png';

// === MUI
const useStyles = makeStyles((theme) => ({
  navColor: {
    background: theme.palette.background.paper,
  },
  navStyle: {
    padding: theme.spacing(1),
  },
  navbarDesktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logo: {
    cursor: 'pointer',
  },
  github: {
    color: theme.palette.primary.main,
    fontSize: 35,
  },
  linkedin: {
    color: theme.palette.primary.main,
    fontSize: 38,
  },
}));

// === COMPONENT
const TopMenu = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box>
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          elevation={0}
          className={classes.navColor}
        >
          {/* Main container with logo */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.navStyle}
          >
            <img
              src={logo}
              alt="Go to Homepage"
              className={classes.logo}
              onClick={() => navigate('/')}
            />

            {/* Social icons */}
            <Stack
              direction="row"
              gap={1}
            >

              {/* NavBar for desktop */}
              <Stack
                className={classes.navbarDesktop}
              >
                <NavBar />
              </Stack>

              <a href="https://github.com/Candyfair" target="_blank" rel="noreferrer">
                <GitHubIcon
                  className={classes.github}
                />
              </a>
              <a href="https://www.linkedin.com/in/candicebfairand/" target="_blank" rel="noreferrer">
                <LinkedInIcon
                  className={classes.linkedin}
                />
              </a>
            </Stack>

          </Stack>
        </AppBar>
      </ElevationScroll>

      <TopMenuOffset />
    </Box>
  );
};

export default TopMenu;

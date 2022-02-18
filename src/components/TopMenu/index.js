// === IMPORTS
import { useNavigate, Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { Stack, AppBar, Box } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import TopMenuOffset from 'src/components/TopMenu/TopMenuOffset';
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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.navStyle}
          >
            <img
              src={logo}
              alt="Go to Homepage"
              onClick={() => navigate('/')}
            />

            <Stack
              direction="row"
              gap={1}
            >
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

// === IMPORTS
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import {
  BottomNavigation, BottomNavigationAction, Paper,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import BookIcon from '@mui/icons-material/Book';
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// === MUI
const useStyles = makeStyles((theme) => ({
  // navBarMobileStyle: {
  //   top: 'auto',
  //   bottom: 0,
  //   padding: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  navbarPosition: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navbarStyle: {
    backgroundColor: theme.palette.secondary.main,
  },
  iconStyle: {
    color: theme.palette.background.default,
  },
}));

// === COMPONENT
const NavBarMobile = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Paper
      className={classes.navbarPosition}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        className={classes.navbarStyle}
      >
        <BottomNavigationAction
          icon={<HomeIcon />}
          className={classes.iconStyle}
          onClick={() => navigate('/')}
        />

        <BottomNavigationAction
          label="Skills"
          icon={<ConstructionIcon />}
          className={classes.iconStyle}
          onClick={() => navigate('/')}
        />

        <BottomNavigationAction
          label="Portfolio"
          icon={<BookIcon />}
          className={classes.iconStyle}
          onClick={() => navigate('/portfolio')}
        />
        <BottomNavigationAction
          label="About"
          icon={<FaceIcon />}
          className={classes.iconStyle}
          onClick={() => navigate('/about')}
        />

        <BottomNavigationAction
          label="Contact"
          icon={<MailOutlineIcon />}
          className={classes.iconStyle}
        />
      </BottomNavigation>

    </Paper>
  );
};

export default NavBarMobile;

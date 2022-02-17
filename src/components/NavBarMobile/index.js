// === IMPORTS
import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, AppBar,
} from '@mui/material';

// === MUI
const useStyles = makeStyles((theme) => ({
  navBarMobileStyle: {
    top: 'auto',
    bottom: 0,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

// === COMPONENT
const NavBarMobile = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.navBarMobileStyle}
      position="fixed"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>Home</Typography>
        <Typography>Skills</Typography>
        <Typography>Portfolio</Typography>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
      </Stack>
    </AppBar>
  );
};

export default NavBarMobile;

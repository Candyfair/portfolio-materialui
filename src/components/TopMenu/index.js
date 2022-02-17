// === IMPORTS
import { makeStyles } from '@mui/styles';
import {
  Stack, AppBar, IconButton,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// === MUI
const useStyles = makeStyles((theme) => ({
  navStyle: {
    padding: theme.spacing(1),
  },
  iconStyle: {
    color: theme.palette.primary.main,
  },

}));

// === COMPONENT
const TopMenu = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="transparent"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.navStyle}
      >
        <Stack>
          LOGO
        </Stack>

        <Stack
          direction="row"
        >
          <IconButton
            className={classes.iconStyle}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            className={classes.iconStyle}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>

      </Stack>
    </AppBar>
  );
};

export default TopMenu;

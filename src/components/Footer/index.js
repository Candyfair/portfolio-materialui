// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  footerPosition: {
    padding: theme.spacing(2),
  },
  footerStyle: {
    fontFamily: 'Apparat',
    fontWeight: 300,
  },
}));

// === COMPONENT
const Footer = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.footerPosition}
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="caption"
        className={classes.footerStyle}
      >
        © 2022 Candice Fairand. Built with React, MaterialUI

      </Typography>
    </Stack>
  );
};

export default Footer;

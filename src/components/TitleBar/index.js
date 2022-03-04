// === IMPORTS
import PropTypes from 'prop-types';

import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  titleContainer: {
    minWidth: '100vw',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  titleStyle: {
    fontFamily: 'Degular, Sans-Serif',
    fontSize: 32,
    fontWeight: 600,
    fontStyle: 'normal',
    color: theme.palette.background.default,
  },

}));

// === COMPONENT
const TitleBar = ({ title }) => {
  const classes = useStyles();

  return (
    <Stack>
      {/* Titre */}
      <Stack className={classes.titleContainer}>
        <Typography className={classes.titleStyle}>
          {title}
        </Typography>
      </Stack>

    </Stack>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleBar;

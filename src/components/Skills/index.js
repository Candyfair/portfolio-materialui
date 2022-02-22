// === IMPORTS
import { Stack, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DownloadIcon from '@mui/icons-material/Download';

import Slider from './Slider';

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
    fontFamily: 'Degular',
    fontSize: 32,
    fontWeight: 600,
    color: theme.palette.background.default,
  },
  bottomContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
    },
  },
  buttonStyle: {
    border: `1px solid ${theme.palette.background.default}`,
    borderRadius: 25,
    textTransform: 'none',
    color: theme.palette.background.default,
    width: 300,
    fontFamily: 'Apparat Medium',
    fontSize: 20,
    marginBottom: theme.spacing(1),
    '&:hover': {
      border: `1px solid ${theme.palette.background.default}`,
    },
  },
  contactStyle: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 25,
    textTransform: 'none',
    color: theme.palette.primary.main,
    width: 300,
    fontFamily: 'Apparat Medium',
    fontSize: 20,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.background.default,
    },
    '&:focus': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
    },
  },
}));

// === COMPONENT
const Skills = () => {
  const classes = useStyles();

  return (
    <Stack>

      {/* Titre */}
      <Stack className={classes.titleContainer}>
        <Typography className={classes.titleStyle}>
          My Skills
        </Typography>
      </Stack>

      {/* Skills descriptions & slider */}
      <Stack>
        <Slider />
      </Stack>

      {/* Call to action buttons */}
      <Stack
        className={classes.bottomContainer}
      >
        <Button
          variant="outlined"
          className={classes.buttonStyle}
        >
          Check my portfolio
        </Button>

        <Button
          variant="outlined"
          className={classes.buttonStyle}
          endIcon={<DownloadIcon />}
        >
          Download my resume
        </Button>

        <Button
          disableElevation
          variant="contained"
          className={classes.contactStyle}
        >
          Contact me
        </Button>
      </Stack>

    </Stack>
  );
};

export default Skills;

// === IMPORTS
import { Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import DownloadIcon from '@mui/icons-material/Download';

import TitleBar from 'src/components/TitleBar';
import Slider from './Slider';

import { setModal } from '../../redux/actions/modals';

// === MUI
const useStyles = makeStyles((theme) => ({
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
    fontFamily: 'Apparat Medium, Sans-Serif',
    fontSize: 20,
    fontWeight: 400,
    fontStyle: 'normal',
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
    fontFamily: 'Apparat Medium, Sans-Serif',
    fontSize: 20,
    fontStyle: 'normal',
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Stack>

      {/* Titre */}
      <TitleBar title="My Skills" id="skills" />

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
          onClick={() => navigate('/portfolio')}
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
          onClick={() => dispatch(setModal(true))}
        >
          Contact me
        </Button>
      </Stack>

    </Stack>
  );
};

export default Skills;

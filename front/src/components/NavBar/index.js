// === IMPORTS
import { Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

// === MUI
const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    border: `1px solid ${theme.palette.background.paper}`,
    borderRadius: 25,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: 'transparent',
    },
  },

}));

// === COMPONENT
const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
    >
      <Button
        className={classes.buttonStyle}
        onClick={() => navigate('/')}
      >
        My Skills
      </Button>
      <Button
        className={classes.buttonStyle}
        onClick={() => navigate('/portfolio')}
      >
        Portfolio
      </Button>
      <Button
        className={classes.buttonStyle}
        onClick={() => navigate('/about')}
      >
        About me
      </Button>
      <Button
        className={classes.buttonStyle}
        onClick={() => dispatch(setModal(true))}
      >
        Contact
      </Button>
    </Stack>
  );
};

export default NavBar;

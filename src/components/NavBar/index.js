// === IMPORTS
import { Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';

// === MUI
const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 25,
      background: 'transparent',
    },
  },

}));

// === COMPONENT
const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

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
      >
        Contact
      </Button>
    </Stack>
  );
};

export default NavBar;

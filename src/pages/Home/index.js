// === IMPORTS
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  myStyle: {

  },

}));

// === COMPONENT
const Home = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.myStyle}
      justifyContent="center"
      alignItems="center"
    >
      Home
    </Stack>
  );
};

export default Home;

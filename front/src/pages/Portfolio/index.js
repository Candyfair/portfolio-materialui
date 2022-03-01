// === IMPORTS
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  myStyle: {

  },

}));

// === COMPONENT
const Portfolio = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.myStyle}
      justifyContent="center"
      alignItems="center"
    >
      Portfolio
    </Stack>
  );
};

export default Portfolio;

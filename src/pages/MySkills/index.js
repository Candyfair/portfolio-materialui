// === IMPORTS
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Skills from 'src/components/Skills';

// === MUI
const useStyles = makeStyles((theme) => ({
  myStyle: {

  },

}));

// === COMPONENT
const MySkills = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.skills}>
      <Skills />
    </Stack>
  );
};

export default MySkills;

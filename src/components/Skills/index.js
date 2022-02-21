// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Slider from './Slider';

// === MUI
const useStyles = makeStyles((theme) => ({
  titleContainer: {
    minWidth: '100vw',
    // padding: theme.spacing(0.2),
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

      {/* Contenu */}
      <Stack>
        <Slider />
      </Stack>

    </Stack>
  );
};

export default Skills;

// === IMPORTS
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TitleBar from 'src/components/TitleBar';
import AboutMe from 'src/components/AboutMe';
import ProgrammingStory from 'src/components/ProgrammingStory';

// === MUI
const useStyles = makeStyles((theme) => ({
  myStyle: {

  },

}));

// === COMPONENT
const About = () => {
  const classes = useStyles();

  return (
    <Stack>
      {/* Titre */}
      <TitleBar title="About Me" />

      <AboutMe />
      <ProgrammingStory />
    </Stack>
  );
};

export default About;

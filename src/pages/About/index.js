// === IMPORTS
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TitleBar from 'src/components/TitleBar';
import AboutMe from 'src/components/AboutMe';
import Socials from 'src/components/Socials';
import TimelineMobile from 'src/components/TimelineMobile';
import TimelineStory from 'src/components/TimelineStory';

// === MUI
const useStyles = makeStyles((theme) => ({
  device: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '0 auto',
      backgroundImage: 'linear-gradient(to left bottom, #f4e482, #d7ef99, #bff6b6, #b1fad3, #affbeb, #b0f7ec, #b2f3ec, #b5efec, #ade6dd, #a7ddce, #a3d4bf, #9fcbb0)',
    },
  },
  mobileView: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  desktopView: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

// === COMPONENT
const About = () => {
  const classes = useStyles();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
    >
      {/* Titre */}
      <TitleBar title="About Me" />

      {/* About me + réseaux sociaux */}
      <Stack
        spacing={2}
        className={classes.device}
      >
        <Stack spacing={2}>
          <AboutMe />
          <Socials />
        </Stack>

        {/* Programming Story (mobile et desktop) */}
        <Stack className={classes.mobileView}>
          <TimelineMobile />
        </Stack>

        <Stack className={classes.desktopView}>
          <TimelineStory />
        </Stack>

      </Stack>
    </Stack>
  );
};

export default About;

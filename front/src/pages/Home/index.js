// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Skills from 'src/components/Skills';
import homepage from 'src/assets/images/homepage.png';

// === MUI
const useStyles = makeStyles((theme) => ({
  device: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: '0 auto',
    },
  },
  textContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400,
    },
  },
  title: {
    fontFamily: 'Degular, Sans-Serif',
    fontSize: 50,
    fontWeight: 700,
    lineHeight: 1,
  },
  caption: {
    fontFamily: 'Apparat, Sans-Serif',
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  imgContainer: {
    flexShrink: 0,
  },
  homeImg: {
    maxWidth: '80%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400,
    },
  },
  skills: {
    marginTop: theme.spacing(2),
  },
}));

// === COMPONENT
const Home = () => {
  const classes = useStyles();

  return (
    <Stack>

      {/* Intro & Illustration */}
      <Stack
        className={classes.device}
      >
        {/* Intro text */}
        <Stack
          justifyContent="left"
          className={classes.textContainer}
          gap={2}
          flexGrow={1}
        >
          <Typography className={classes.title}>
            Hi, I'm Candice
          </Typography>
          <Typography className={classes.caption}>
            A front-end developer with a background in finance, graphic design and e-commerce
          </Typography>
        </Stack>

        {/* Illustration */}
        <Stack
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
          className={classes.imgContainer}
        >
          <img
            src={homepage}
            alt="Candice is coding"
            className={classes.homeImg}
          />
        </Stack>
      </Stack>

      {/* Skills */}
      <Stack className={classes.skills}>
        <Skills />
      </Stack>

    </Stack>

  );
};

export default Home;

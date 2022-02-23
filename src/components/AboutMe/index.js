// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import portrait from 'src/assets/images/portrait.jpg';

// === MUI
const useStyles = makeStyles((theme) => ({
  containerStack: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing(4),
    flexDirection: 'column',
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400,
    },
  },
  photo: {
    borderRadius: 25,
    [theme.breakpoints.up('sm')]: {
      borderRadius: '33% 67% 66% 34% / 37% 38% 62% 63%',
    },
    padding: theme.spacing(2),
  },
  titleAbout: {
    fontFamily: 'Degular',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
    color: theme.palette.secondary.main,
  },
  textAbout: {
    fontFamily: 'Apparat',
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 1.2,
  },
}));

// === COMPONENT
const AboutMe = () => {
  const classes = useStyles();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={classes.containerStack}
    >
      {/* Photo */}
      <Stack>
        <img
          src={portrait}
          alt="Candice Fairand"
          className={classes.photo}
        />
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        className={classes.textContainer}
      >
        <Typography className={classes.titleAbout}>
          Hello there!
        </Typography>

        <Typography className={classes.textAbout}>
          I’m Candice Fairand, a web developer working in Paris, France,
          with a passion for illustration and visual design.
        </Typography>
        <Typography className={classes.textAbout}>
          I am well versed in design trends, and usability. I program in CSS, HTML,
          JavaScript and ReactJS.
        </Typography>
        <Typography className={classes.textAbout}>
          My aim is to work in an international environment where I can use all of my creative,
          problem solving and management skills to deliver innovative solutions.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutMe;

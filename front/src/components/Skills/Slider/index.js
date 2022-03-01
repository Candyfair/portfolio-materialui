// === IMPORTS
import SwipeableViews from 'react-swipeable-views';

import { Stack, MobileStepper, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import TechSkills from '../TechSkills';
import ProSkills from '../ProSkills';
import SoftSkills from '../SoftSkills';

// === MUI
const useStyles = makeStyles((theme) => ({
  containerStack: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
  mobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  skillsDesktop: {
    maxWidth: '30%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '33%',
    },
  },
}));

// === COMPONENT
const Slider = () => {
  const classes = useStyles();

  // Slider for mobile
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack className={classes.containerStack}>

      {/* DESKTOP */}
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={2}
        className={classes.desktop}
      >
        <Stack className={classes.skillsDesktop}><TechSkills /></Stack>
        <Stack className={classes.skillsDesktop}><ProSkills /></Stack>
        <Stack className={classes.skillsDesktop}><SoftSkills /></Stack>
      </Stack>

      {/* MOBILE */}
      <Stack className={classes.mobile}>

        {/* Slider for Mobile view */}
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {/* SLIDES */}
          <TechSkills />
          <ProSkills />
          <SoftSkills />

        </SwipeableViews>

        {/* Navigation in slider */}
        <Stack
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <MobileStepper
            steps={maxSteps}
            variant="dots"
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={(
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
          )}
            backButton={(
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
          )}
          />
        </Stack>
      </Stack>

    </Stack>
  );
};

export default Slider;

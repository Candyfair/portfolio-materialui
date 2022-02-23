// === IMPORTS
import { useState } from 'react';

import {
  Stack, Box, Button, Typography, Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import arrow from 'src/assets/images/arrow.png';

import stories from 'src/data/story';

import TitleBar from 'src/components/TitleBar';
import img1 from 'src/assets/images/img1.png';

// === MUI
const useStyles = makeStyles((theme) => ({
  globalContainer: {
    backgroundImage: 'linear-gradient(to bottom, #f4e482, #d7ef99, #bff6b6, #b1fad3, #affbeb, #b0f7ec, #b2f3ec, #b5efec, #ade6dd, #a7ddce, #a3d4bf, #9fcbb0)',
    padding: theme.spacing(2),
  },
  titleBarMobile: {
    // backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  yearStyle: {
    fontFamily: 'Degular',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.secondary.main,
    paddingTop: 0,
  },
  textStyle: {
    fontFamily: 'Apparat',
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 1.2,
    flex: 10,
  },
  iconStyle: {
    color: theme.palette.secondary.main,
  },
  arrowStyle: {
    position: 'fixed',
    bottom: 60,
    right: theme.spacing(1),
  },
  clicPosition: {
    backgroundColor: '#f25a17',
    borderRadius: 15,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 130,
  },
  clicStyle: {
    color: theme.palette.background.default,
    fontFamily: 'Apparat',
    fontSize: 22,
    fontWeight: 300,
  },
}));

// === COMPONENT
const TimelineMobile = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Stack>
      {/* Title bar for mobile */}
      <Stack className={classes.titleBarMobile}>
        <TitleBar
          title="My programming story"
        />
      </Stack>

      {/* Content */}
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={3}
        className={classes.globalContainer}
      >
        <img
          src={img1}
          alt="Amstrad CPC 464"
        />

        {/* Reset link */}
        {activeStep === stories.length && (
        <Stack className={classes.resetLink}>
          <Button onClick={handleReset}>Start again</Button>
        </Stack>
        )}

        {/* Stepper */}
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {stories.map((story, index) => (
              <Step key={story.id}>
                <StepLabel
                  StepIconComponent={SmartToyOutlinedIcon}
                  className={classes.iconStyle}
                >
                  <Typography className={classes.yearStyle}>{story.year}</Typography>
                </StepLabel>

                <StepContent>
                  <Typography className={classes.textStyle}>{story.description}</Typography>

                  <Box sx={{ mb: 2 }}>
                    <div>

                      <Button
                        variant="contained"
                        endIcon={index === stories.length - 1
                          ? (<AccessibilityNewIcon />)
                          : (<AutoAwesomeIcon />)}
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === stories.length - 1 ? 'Yay! Hire me!' : 'What happened next?'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>

                </StepContent>

              </Step>
            ))}
          </Stepper>

          {activeStep === stories.length && (
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={1}
            className={classes.arrowStyle}
          >
            <Box className={classes.clicPosition}>
              <Typography className={classes.clicStyle}>Hire me!</Typography>
            </Box>
            <img src={arrow} alt="arrow" />
          </Stack>
          )}
        </Box>

      </Stack>
    </Stack>
  );
};

export default TimelineMobile;

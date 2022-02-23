// === IMPORTS
import { Stack, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import story from 'src/data/story';
import img1 from 'src/assets/images/img1.png';
import img2 from 'src/assets/images/img2.png';
import img3 from 'src/assets/images/img3.png';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// === MUI
const useStyles = makeStyles((theme) => ({
  timelineContainer: {
    padding: theme.spacing(2),
  },
  titleDesktopStyle: {
    fontFamily: 'Degular',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: 'center',
    color: theme.palette.secondary.main,
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
  connectorStyle: {
    height: '100%',
    backgroundColor: theme.palette.primary.main,

  },
  dotStyle: {
    margin: 0,
    width: 25,
    height: 30,
    borderColor: theme.palette.primary.main,
  },
  bottomImg: {
    width: '100%',
  },
}));

// === COMPONENT
const TimelineStory = () => {
  const classes = useStyles();

  return (
    <Stack
      spacing="2"
      justifyContent="center"
      alignItems="center"
      className={classes.timelineContainer}
    >

      {/* Title */}
      <Typography className={classes.titleDesktopStyle}>My programming story</Typography>

      <img
        src={img1}
        alt="Amstrad CPC 464"
      />

      {/* Timeline */}
      <Timeline position="right">
        {story.map((myStory) => (
          <TimelineItem key={myStory.id}>

            <TimelineOppositeContent className={classes.yearStyle}>
              {myStory.year}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot variant="outlined" className={classes.dotStyle} />
              <TimelineConnector className={classes.connectorStyle} />
            </TimelineSeparator>

            <TimelineContent className={classes.textStyle}>
              {myStory.description}
            </TimelineContent>

          </TimelineItem>
        ))}
      </Timeline>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        className={classes.bottomImg}
      >
        <img src={img2} alt="Dot-matrix printer" />
        <img src={img3} alt="Laptop" />
      </Stack>

    </Stack>
  );
};

export default TimelineStory;

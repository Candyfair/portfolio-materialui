// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// === MUI
const useStyles = makeStyles((theme) => ({
  titleMain: {
    fontFamily: 'Degular Display, Sans-Serif',
    fontSize: 30,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: 1,
    marginBottom: theme.spacing(2),
  },
  iconStyle: {
    // marginTop: theme.spacing(1),
    fontSize: 28,
    color: theme.palette.success.main,
  },
  skillStack: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1.5),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
    },
  },
  titleSkill: {
    fontFamily: 'Degular Display, Sans-Serif',
    fontSize: 26,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: 1,
    color: theme.palette.success.main,
  },
  description: {
    fontFamily: 'Apparat Medium, Sans-Serif',
    fontSize: 20,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.2,
    marginBottom: theme.spacing(1.5),
    paddingRight: theme.spacing(2),
  },
}));

// === COMPONENT
const SoftSkills = () => {
  const classes = useStyles();

  return (
    <Stack>
      {/* Group title */}
      <Typography className={classes.titleMain}>
        Soft Skills
      </Typography>

      {/* Managing teams */}
      <Stack
        direction="row"
        justifyContent="left"
        className={classes.skillStack}
      >
        {/* Skill icon */}
        <BookmarkBorderIcon className={classes.iconStyle} />

        <Stack
          justifyContent="column"
          alignItems="flex-start"
        >
          {/* Skill title */}
          <Typography className={classes.titleSkill}>
            Managing teams
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Coordination, motivation, training, events management
          </Typography>
        </Stack>
      </Stack>

      {/* Logical */}
      <Stack
        direction="row"
        justifyContent="left"
        className={classes.skillStack}
      >
        {/* Skill icon */}
        <BookmarkBorderIcon className={classes.iconStyle} />

        <Stack
          justifyContent="column"
          alignItems="flex-start"
        >
          {/* Skill title */}
          <Typography className={classes.titleSkill}>
            Logical
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Information research and synthesis, problem-solving
          </Typography>
        </Stack>
      </Stack>

      {/* Communication */}
      <Stack
        direction="row"
        justifyContent="left"
        className={classes.skillStack}
      >
        {/* Skill icon */}
        <BookmarkBorderIcon className={classes.iconStyle} />

        <Stack
          justifyContent="column"
          alignItems="flex-start"
        >
          {/* Skill title */}
          <Typography className={classes.titleSkill}>
            Communication
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Fluent French & English<br />
            Concise written communication
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  );
};

export default SoftSkills;

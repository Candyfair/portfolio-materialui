// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// === MUI
const useStyles = makeStyles((theme) => ({
  titleMain: {
    fontFamily: 'Degular Display',
    fontSize: 30,
  },
  iconStyle: {
    marginTop: theme.spacing(1),
    fontSize: 28,
    color: theme.palette.success.main,
  },
  skillStack: {
    marginLeft: theme.spacing(3),
  },
  titleSkill: {
    fontFamily: 'Degular Display',
    fontSize: 26,
    color: theme.palette.success.main,
  },
  description: {
    fontFamily: 'Apparat Medium',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.2,
    marginBottom: theme.spacing(1.5),
    paddingRight: theme.spacing(2),
  },
}));

// === COMPONENT
const ProSkills = () => {
  const classes = useStyles();

  return (
    <Stack>
      {/* Group title */}
      <Typography className={classes.titleMain}>
        Professional Skills
      </Typography>

      {/* Project Management */}
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
            Project Management
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Invitation to tender, creating project plans,
            writing functional specifications,
            project budget, test execution, Agile methods
          </Typography>
        </Stack>
      </Stack>

      {/* Management accounting */}
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
            Management accounting
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Dashboard reporting, cost reduction analysis, revenue analysis, FX gains/losses
          </Typography>
        </Stack>
      </Stack>

      {/* Management of back-office */}
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
            Management of back-office
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Procurement, AP, AR, Payroll<br />
            HR contracts, French legislation, managing disputes
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  );
};

export default ProSkills;

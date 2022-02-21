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
const TechSkills = () => {
  const classes = useStyles();

  return (
    <Stack>
      {/* Group title */}
      <Typography className={classes.titleMain}>
        Technical Skills
      </Typography>

      {/* Stack & Environment */}
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
            Stack & Environment
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            HTML, CSS, MaterialUI<br />
            JavaScript, Node.js, Express.js<br />
            React, Redux, Webpack<br />
            MySQL, PostGreSQL, MongoDB<br />
            Git+Github, VSCode<br />
            Notion
          </Typography>
        </Stack>
      </Stack>

      {/* UI/UX Design */}
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
            UI/UX Design
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Adobe Photoshop, Illustrator, Affinity Designer, Procreate,<br />
            InDesign, Affinity Publisher<br />
            Clip Studio Paint<br />
            Whimsical, Figma
          </Typography>
        </Stack>
      </Stack>

      {/* E-commerce */}
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
            E-commerce
          </Typography>

          {/* Skill details */}
          <Typography className={classes.description}>
            Shopify, Squarespace<br />
            Google analytics
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  );
};

export default TechSkills;
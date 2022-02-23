// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

// === MUI
const useStyles = makeStyles((theme) => ({
  socialsContainer: {
    padding: theme.spacing(4),
  },
  socialsCaption: {
    fontFamily: 'Apparat',
    fontSize: 20,
    fontWeight: 300,
    color: theme.palette.secondary.main,
  },
}));

// === COMPONENT
const Socials = () => {
  const classes = useStyles();

  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      spacing={1}
      className={classes.socialsContainer}
    >
      <Typography className={classes.socialsCaption}>Let's keep in touch!</Typography>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        gap={2}
      >
        <Stack alignItems="center">
          <a href="https://www.linkedin.com/in/candicebfairand/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="large" color="secondary" />
          </a>
          <Typography variant="caption" color="secondary">LinkedIn</Typography>
        </Stack>

        <Stack alignItems="center">
          <a href="https://github.com/Candyfair" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large" color="secondary" />
          </a>
          <Typography variant="caption" color="secondary">GitHub</Typography>
        </Stack>

        <Stack alignItems="center">
          <a href="https://www.instagram.com/candy.fair/" target="_blank" rel="noreferrer">
            <InstagramIcon fontSize="large" color="secondary" />
          </a>
          <Typography variant="caption" color="secondary">Instagram</Typography>
        </Stack>

      </Stack>


    </Stack>
  );
};

export default Socials;

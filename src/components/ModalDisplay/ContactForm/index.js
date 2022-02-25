// === IMPORTS
import {
  Stack, Typography, TextField, InputLabel, FormControl, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import Socials from 'src/components/Socials';

// === MUI
const useStyles = makeStyles((theme) => ({
  titleContact: {
    fontFamily: 'Degular Display',
    fontSize: 32,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: 1,
    color: theme.palette.secondary.main,
  },
  textContact: {
    fontFamily: 'Apparat Medium, Sans-Serif',
    fontSize: 22,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.2,
    padding: theme.spacing(2),
    maxWidth: 400,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  labels: {
    fontFamily: 'Apparat Medium, Sans-Serif',
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    color: theme.palette.success.main,
  },
  required: {
    color: theme.palette.error.main,
  },
  textInput: {
    width: 400,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.success.main,
      },
    },
    fontFamily: 'Apparat Medium, Sans-Serif',
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
  },
  buttonStyle: {
    width: 50,
    marginTop: theme.spacing(0.5),
  },
}));

// === COMPONENT
const ContactForm = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Stack
      alignContent="space-between"
      alignItems="center"
    >
      {/* Text + contact form */}
      <Stack
        justifyContent="center"
        alignItems="center"
      >
        <Typography className={classes.titleContact}>Contact Me</Typography>
        <Typography className={classes.textContact}>
          Feel free to reach out if you're looking for a developer, have a question,
          or just want to connect:
        </Typography>

        {/* Contact Form */}
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Stack spacing={2}>

            {/* E-mail input field */}
            <Stack>
              <Typography className={classes.labels}>
                Your e-mail address <span className={classes.required}>*</span>
              </Typography>
              <TextField
                required
                autoComplete="off"
                hiddenLabel
                focused
                id="email"
                variant="outlined"
                color="success"
                className={classes.textInput}
              />
            </Stack>

            {/* Message input field */}
            <Stack>
              <Typography className={classes.labels}>
                Your message <span className={classes.required}>*</span>
              </Typography>
              <TextField
                required
                autoComplete="off"
                hiddenLabel
                id="message"
                variant="outlined"
                color="success"
                multiline
                minRows={4}
                className={classes.textInput}
              />
              <Stack justifyContent="right" alignItems="flex-end">
                <Button
                  variant="contained"
                  type="submit"
                  color="success"
                  disableElevation
                  className={classes.buttonStyle}
                >
                  Send
                </Button>
              </Stack>
            </Stack>

          </Stack>
        </form>

      </Stack>

      {/* Social links */}
      <Stack>
        <Socials />
      </Stack>

    </Stack>
  );
};

export default ContactForm;

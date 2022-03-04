// === IMPORTS
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
  Stack, Typography, TextField, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import Socials from 'src/components/Socials';

// === MUI
const useStyles = makeStyles((theme) => ({
  contactForm: {
    width: '100%',
  },
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
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(2),
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
    width: '100%',
    minWidth: '',
    [theme.breakpoints.up('sm')]: {
      width: 400,
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uw4ntbv',
      'template_dbd3cdd',
      form.current,
      'ohBoB_tK8fjW5dWhD',
    )
      .then((res) => {
        console.log(res.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <Stack
      alignContent="space-between"
      alignItems="center"
      className={classes.contactForm}
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
          ref={form}
          className={classes.form}
          onSubmit={sendEmail}
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
                name="email"
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
                name="message"
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

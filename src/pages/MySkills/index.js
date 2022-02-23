// === IMPORTS
import { Stack, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Skills from 'src/components/Skills';

// === MUI
const useStyles = makeStyles((theme) => ({
  backStack: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(3),
  },
  backLink: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
}));

// === COMPONENT
const MySkills = () => {
  const classes = useStyles();

  return (
    <Stack>
      <Stack>
        <Skills />
      </Stack>

      <Stack
        justifyContent="center"
        alignItems="center"
        className={classes.backStack}
      >
        <Link href="/" className={classes.backLink}>Back to Homepage</Link>
      </Stack>
    </Stack>
  );
};

export default MySkills;

// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TitleBar from 'src/components/TitleBar';
import img1 from 'src/assets/images/img1.png';
import img2 from 'src/assets/images/img2.png';
import img3 from 'src/assets/images/img3.png';

// === MUI
const useStyles = makeStyles((theme) => ({
  globalContainer: {
    backgroundImage: 'linear-gradient(to top, #f4e482, #d7ef99, #bff6b6, #b1fad3, #affbeb, #b0f7ec, #b2f3ec, #b5efec, #ade6dd, #a7ddce, #a3d4bf, #9fcbb0)',
  },
  programmingTitle: {
    backgroundColor: theme.palette.background.default,
  },
  containerProgramming: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '60%',
    },
  },
  titleProg: {
    fontFamily: 'Degular',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.secondary.main,
  },
  textProg: {
    fontFamily: 'Apparat',
    fontSize: 22,
    fontWeight: 300,
    lineHeight: 1.2,
  },
}));

// === COMPONENT
const ProgrammmingStory = () => {
  const classes = useStyles();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={3}
      className={classes.globalContainer}
    >

      {/* Title */}
      <Stack className={classes.programmingTitle}>
        <TitleBar
          title="My programming story"
        />
      </Stack>

      {/* Content */}
      <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        className={classes.containerProgramming}
      >
        <img
          src={img1}
          alt="Amstrad CPC 464"
        />

        {/* ============================= 1986 */}
        <Stack
          justifyContent="left"
          alignItems="flex-start"
        >
          <Typography className={classes.titleProg}>
            1986
          </Typography>
          <Typography className={classes.textProg}>
            My parents bring home an Amstrad CPC 464.
            It has a tape drive and a green monochrome monitor.
            Games are all pixelized and can take up to 15 minutes to load.
            I'm 7 and I'm hooked.
          </Typography>
        </Stack>

        {/* ============================= 1993 */}
        <Stack
          justifyContent="right"
          alignItems="flex-end"
        >
          <Typography className={classes.titleProg}>
            1993
          </Typography>
          <Typography className={classes.textProg}>
            I'm at secondary school, I chose an IT option and I'm learning
            how to code in Turbo Pascal. So vintage!
          </Typography>
        </Stack>

        {/* ============================= 1995 */}
        <Stack
          justifyContent="left"
          alignItems="flex-start"
        >
          <Typography className={classes.titleProg}>
            1995
          </Typography>
          <Typography className={classes.textProg}>
            At home, we now have a computer that reads 5¼" floppy disks,
            and a dot-matrix printer. My mom teaches me how to use MS Office
            suite and I start writing my first novel. After 150 pages and a
            hard drive crash, I lose everything I wrote. That's how I learn
            the importance of doing backups and saving my work regularly.
          </Typography>
        </Stack>

        <img
          src={img2}
          alt="Dot-matrix printer"
        />

        {/* ============================= 1998 */}
        <Stack
          justifyContent="right"
          alignItems="flex-end"
        >
          <Typography className={classes.titleProg}>
            1998
          </Typography>
          <Typography className={classes.textProg}>
            As a student, I have a part-time job as a night receptionist.
            With few visitors and a laptop left for the reception, I use
            this machine to make my first website on GeoCities with lots of
            frames, blinking titles and very aggressive animated gifs.
          </Typography>
        </Stack>

        <img
          src={img3}
          alt="Laptop"
        />

        {/* ============================= 2004 */}
        <Stack
          justifyContent="left"
          alignItems="flex-start"
        >
          <Typography className={classes.titleProg}>
            2004
          </Typography>
          <Typography className={classes.textProg}>
            I'm a management accountant for an American consulting firm
            where I'm known as "The Queen of Excel". My dashboards include
            pivot tables and are automated with sparkling VBA scripts.
          </Typography>
        </Stack>

        {/* ============================= 2008 */}
        <Stack
          justifyContent="right"
          alignItems="flex-end"
        >
          <Typography className={classes.titleProg}>
            2008
          </Typography>
          <Typography className={classes.textProg}>
            I move to the South of France and start an online business.
            I begin with the open source platform Joomla and the extension
            Virtuemart for e-commerce. Two years later my business expands
            and I migrate to Prestashop. For both of these I learn to use PHP
            to make my site stand out.
          </Typography>
        </Stack>

        {/* ============================= 2015 */}
        <Stack
          justifyContent="left"
          alignItems="flex-start"
        >
          <Typography className={classes.titleProg}>
            2015
          </Typography>
          <Typography className={classes.textProg}>
            My life takes an unexpected turn. I have to close my business and
            move back to Paris. I take an administrative job which involves managing
            some IT projects and in my free time I learn JavaScript.
          </Typography>
        </Stack>

        {/* ============================= 2021 */}
        <Stack
          justifyContent="right"
          alignItems="flex-end"
        >
          <Typography className={classes.titleProg}>
            2021
          </Typography>
          <Typography className={classes.textProg}>
            I decide that I need to do a dedicated Full Stack training to bring
            together everything that I've learnt over the years. My passion for
            UI and graphic design push me towards front end development.
          </Typography>
        </Stack>

      </Stack>
    </Stack>
  );
};

export default ProgrammmingStory;

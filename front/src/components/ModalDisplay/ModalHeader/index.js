// === IMPORTS
import { useDispatch } from 'react-redux';

import { Stack, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { setModal } from '../../../redux/actions/modals';

// === MUI
const useStyles = makeStyles((theme) => ({
  modalHeader: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      margin: `${theme.spacing(2)} ${theme.spacing(2)}`,
      justifyContent: 'flex-start',
    },
  },
  closeButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  backButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },

  },
}));

// === COMPONENT
const ModalHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Stack
      className={classes.modalHeader}
      flexDirection="row"
    >
      <IconButton
        size="small"
        onClick={() => dispatch(setModal(false, 'none'))}
        className={classes.backButton}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        size="small"
        onClick={() => dispatch(setModal(false, 'none'))}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ModalHeader;

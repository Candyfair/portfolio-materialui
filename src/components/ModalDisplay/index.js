// === IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { Stack, Modal, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { setModal } from '../../redux/actions/modals';

import ModalHeader from './ModalHeader';
import ContactForm from './ContactForm';

// === MUI
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '325px',
    background: theme.palette.background.default,
    boxShadow: theme.custom.shadow.card,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
    },
  },

}));

// === COMPONENT
const ModalDisplay = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { modal } = useSelector((state) => state.modals);

  return (
    <Modal
      open={modal}
      onClose={() => dispatch(setModal(false, 'none'))}
    >
      <Box className={classes.modal}>
        <ModalHeader />
        <ContactForm />
      </Box>
    </Modal>
  );
};

export default ModalDisplay;

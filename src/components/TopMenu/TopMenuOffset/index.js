import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const TopMenuOffset = () => {
  const classes = useStyles();

  return (
    <Box sx={{ padding: '40px 0' }} className={classes.offset} />
  );
};

export default TopMenuOffset;

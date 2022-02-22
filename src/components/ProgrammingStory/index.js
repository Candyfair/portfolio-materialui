// === IMPORTS
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TitleBar from 'src/components/TitleBar';

// === MUI
const useStyles = makeStyles((theme) => ({
  myStyle: {

  },

}));

// === COMPONENT
const ProgrammmingStory = () => {
  const classes = useStyles();

  return (
    <Stack>
    
        {/* Title */}
      <TitleBar title="My programming story" />

    </Stack>
  );
};

export default ProgrammmingStory;

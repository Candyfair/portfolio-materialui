// === IMPORTS
import { Stack, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: 'Apparat',
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 1.2,
  },

}));

// === COMPONENT
const Skills = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.myStyle}
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        Skills
      </Box>

      <Typography className={classes.text}>
        Lorem ipsum dolor sit amet. Et illo doloremque est enim reprehenderit non galisum illum qui sunt esse a adipisci omnis eos accusantium voluptates et facere architecto. Non ipsam aspernatur ut consequuntur reprehenderit est neque labore quo ullam rerum? Ea placeat magnam aut dolore officia id quidem cumque sit minima quod in aperiam eaque et architecto voluptates non rerum voluptatibus. Sed quae consectetur aut veniam iusto cum consequuntur dolores. Ut facere quis non repudiandae fugiat et tempora labore eos Quis voluptates id Quis quia.Et iste obcaecati ad voluptate quibusdam eum voluptates quisquam aut consectetur voluptas est nobis Quis sit sequi aliquid. Ut suscipit nulla et molestiae sunt a perspiciatis fugiat sit repellendus veritatis. Ad aspernatur accusamus  dolorem dolorem eos nobis optio ut distinctio minus qui quae doloremque quo error eaque 33 omnis dolorum. Sed galisum inventore a dolores alias aut dolore iusto est expedita rerum. Est dignissimos expedita ut omnis similique eos atque nihil eos iste perspiciatis! Vel eaque eligendi ab numquam modi est quam veritatis aut assumenda accusantium id quisquam voluptate eum nulla vero eos dolorum doloribus. Eum dolorum sequi cum voluptas eveniet vel magnam ipsam. Et aspernatur optio hic illum debitis qui magni atque et molestiae earum qui ducimus eveniet. Cum nemo veritatis hic ipsum reprehenderit sit esse doloremque. Aut consequuntur sunt rem officia dolores aut perspiciatis quidem. In numquam fugiat rem voluptatem dolores aut natus totam aut dolorem nulla ut maxime reiciendis et perferendis sint. Ex earum blanditiis aut dolores nesciunt et quia explicabo? Et aperiam voluptatem in aperiam odio qui expedita voluptatem sed consequuntur omnis aut blanditiis quasi et animi laboriosam sit recusandae illum! Vel sunt obcaecati et molestiae vero in voluptatibus alias! 

      </Typography>
    </Stack>
  );
};

export default Skills;

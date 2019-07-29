import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AbilityScore from './AbilityScore';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '20rem',
    border: '.1rem black solid',
  },
  header: {
    fontSize: 'x-large',
    margin: '.7rem 0',
  },
}));

export default function AbilityScores(props) {
  const { scores } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Ability Scores</Typography>
      <Grid container direction="column">
        <AbilityScore name="Strength" score={scores.strength} />
        <AbilityScore name="Dexterity" score={scores.dexterity} />
        <AbilityScore name="Constitution" score={scores.constitution} />
        <AbilityScore name="Intelligence" score={scores.intelligence} />
        <AbilityScore name="Wisdom" score={scores.wisdom} />
        <AbilityScore name="Charisma" score={scores.charisma} />
      </Grid>
    </div>
  );
}

AbilityScores.propTypes = {
  scores: propTypes.shape({
    strength: propTypes.number.isRequired,
    dexterity: propTypes.number.isRequired,
    constitution: propTypes.number.isRequired,
    intelligence: propTypes.number.isRequired,
    wisdom: propTypes.number.isRequired,
    charisma: propTypes.number.isRequired,
  }).isRequired,
};

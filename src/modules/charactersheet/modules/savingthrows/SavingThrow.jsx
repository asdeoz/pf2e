import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { calculateProficiency, calculateModifier, printModifier } from '../../../../utils/Utils';

const getSavingThrow = (modifier, prof, level, item) => {
  const profScore = calculateProficiency(prof, level);
  return profScore + modifier + item;
};

export default function SavingThrow(props) {
  const {
    name,
    scoreName,
    scoreValue,
    prof,
    item,
    level,
  } = props;
  const modifier = calculateModifier(scoreValue);

  return (
    <Grid container direction="column">
      <Grid item>{name}</Grid>
      <Grid item>{getSavingThrow(modifier, prof, level, item)}</Grid>
      <Grid container>
        <Grid item xs={6}>
          {scoreName}
          {printModifier(modifier)}
        </Grid>
      </Grid>
    </Grid>
  );
}

SavingThrow.propTypes = {
  name: propTypes.string.isRequired,
  scoreName: propTypes.string.isRequired,
  scoreValue: propTypes.number.isRequired,
  prof: propTypes.number.isRequired,
  item: propTypes.number,
  level: propTypes.number.isRequired,
};

SavingThrow.defaultProps = {
  item: 0,
};

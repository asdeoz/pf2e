import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { calculateProficiency } from '../../../../utils/Utils';

const getSavingThrow = (mod, prof, level, item) => {
  const profScore = calculateProficiency(prof, level);
  return profScore + mod + item;
};

export default function SavingThrow(props) {
  const {
    name,
    modName,
    modValue,
    prof,
    item,
    level,
  } = props;

  return (
    <Grid container direction="column">
      <Grid item>{name}</Grid>
      <Grid item>{modName}</Grid>
      <Grid item>{getSavingThrow(modValue, prof, level, item)}</Grid>
    </Grid>
  );
}

SavingThrow.propTypes = {
  name: propTypes.string.isRequired,
  modName: propTypes.string.isRequired,
  modValue: propTypes.number.isRequired,
  prof: propTypes.number.isRequired,
  item: propTypes.number,
  level: propTypes.number.isRequired,
};

SavingThrow.defaultProps = {
  item: 0,
};

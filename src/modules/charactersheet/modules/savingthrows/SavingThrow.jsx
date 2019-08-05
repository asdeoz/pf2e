import React from 'react';
import { makeStyles } from '@material-ui/core';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import {
  calculateProficiency,
  calculateModifier,
  printBonus,
  abbr,
} from '../../../../utils/Utils';
import BonusBox from '../../../../components/BonusBox';
import ProficiencyBox from '../../../../components/ProficiencyBox';

const getSavingThrow = (modifier, prof, level, item) => {
  const profScore = calculateProficiency(prof, level);
  return printBonus(profScore + modifier + item);
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    border: '1px solid black',
    maxWidth: '14rem',
  },
  savingthrowBox: {
    border: '1px solid black',
    borderRadius: '.5rem',
    maxWidth: '8rem',
    margin: '.3rem auto',
    padding: '.3rem 1.5rem',
  },
});

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
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>{name}</Grid>
      <Grid item className={classes.savingthrowBox}>
        {getSavingThrow(modifier, prof, level, item)}
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6}>
          <BonusBox title={abbr(scoreName)} bonus={modifier} uppercase />
        </Grid>
        <Grid item xs={6}>
          <BonusBox title="Prof" bonus={prof} uppercase />
        </Grid>
        <Grid item xs={6}>
          <BonusBox title="Item" bonus={item} uppercase />
        </Grid>
        <Grid item xs={6}>
          <ProficiencyBox proficiency={prof} />
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

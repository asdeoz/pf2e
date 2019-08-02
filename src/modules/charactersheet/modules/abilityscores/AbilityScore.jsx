import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { calculateModifier, printBonus, abbr } from '../../../../utils/Utils';

const getModifier = (score) => {
  const modifier = calculateModifier(score);
  return printBonus(modifier);
};

const useStyles = makeStyles(() => ({
  root: {
    textTransform: 'uppercase',
    marginBottom: '.75rem',
    padding: '0 .5rem',
  },
  modifier: {
    border: '.2rem solid black',
    fontSize: 'larger',
    verticalAlign: 'middle',
    lineHeight: '2',
  },
  modifierBox: {

  },
  modifierName: {
    fontSize: 'larger',
  },
  modifierText: {
    fontSize: 'xx-small',
    lineHeight: '.5rem',
    paddingBottom: '.5rem',
  },
  score: {
    border: '.2rem solid black',
    fontSize: 'larger',
    verticalAlign: 'middle',
    lineHeight: '2',
  },
  scoreBox: {
    paddingRight: '.5rem',
  },
  scoreName: {
    textAlign: 'right',
  },
  scoreText: {
    fontSize: 'xx-small',
    textAlign: 'right',
  },
}));

export default function AbilityScore(props) {
  const { name, score } = props;
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={2} className={classes.modifier}>
          {getModifier(score)}
        </Grid>
        <Grid item xs={3} className={classes.modifierBox}>
          <div className={classes.modifierName}>{abbr(name)}</div>
          <div className={classes.modifierText}>Modifier</div>
        </Grid>
        <Grid item xs={5} className={classes.scoreBox}>
          <div className={classes.scoreName}>{name}</div>
          <div className={classes.scoreText}>score</div>
        </Grid>
        <Grid item xs={2} className={classes.score}>
          {score}
        </Grid>
      </Grid>
    </Grid>
  );
}

AbilityScore.propTypes = {
  name: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
};

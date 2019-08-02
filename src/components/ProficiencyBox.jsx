import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '.3rem',
  },
  itemBox: {
    border: '1px solid black',
    width: '1.5rem',
  },
  title: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 'smaller',
    textTransform: 'uppercase',
    paddingRight: '.2rem',
    paddingLeft: '.2rem',
  },
  proficiencyBox: {
    paddingRight: '.2rem',
    paddingLeft: '.2rem',
  },
});

export default function ProficiencyBox(props) {
  const { proficiency } = props;
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item className={classes.itemBox}>
        <Typography className={classes.title}>
          T
        </Typography>
        <Typography className={classes.proficiencyBox}>
          {proficiency > 0 ? 'X' : (<>&nbsp;</>)}
        </Typography>
      </Grid>
      <Grid item className={classes.itemBox}>
        <Typography className={classes.title}>
          E
        </Typography>
        <Typography className={classes.proficiencyBox}>
          {proficiency > 1 ? 'X' : (<>&nbsp;</>)}
        </Typography>
      </Grid>
      <Grid item className={classes.itemBox}>
        <Typography className={classes.title}>
          M
        </Typography>
        <Typography className={classes.proficiencyBox}>
          {proficiency > 2 ? 'X' : (<>&nbsp;</>)}
        </Typography>
      </Grid>
      <Grid item className={classes.itemBox}>
        <Typography className={classes.title}>
          L
        </Typography>
        <Typography className={classes.proficiencyBox}>
          {proficiency > 3 ? 'X' : (<>&nbsp;</>)}
        </Typography>
      </Grid>
    </Grid>
  );
}

ProficiencyBox.propTypes = {
  proficiency: propTypes.number.isRequired,
};

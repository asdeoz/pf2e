import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import GeneralInfoType from '../../../../lib/GeneralInfoType';

const useStyles = makeStyles({
  root: {
    height: '100%',
    position: 'relative',
  },
  oneBox: {
    minHeight: '2rem',
    border: '1px solid black',
  },
  twoBox: {
    minHeight: '4rem',
    border: '1px solid black',
  },
  threeBox: {
    minHeight: '6rem',
    border: '1px solid black',
  },
  title: {
    position: 'absolute',
    top: '.2rem',
    left: '.4rem',
    fontSize: 'smaller',
  },
});

export default function CharacterInfo(props) {
  const classes = useStyles();
  const { info } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item className={classes.threeBox}>
            <span className={classes.title}>Character Name</span>
            <span>{info.charName}</span>
          </Grid>
          <Grid item className={classes.oneBox}>
            Player Name
          </Grid>
          <Grid item className={classes.oneBox}>
            Experience Points (XP)
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item className={classes.oneBox}>
            Ancestry and Heritage
          </Grid>
          <Grid item className={classes.oneBox}>
            Background
          </Grid>
          <Grid item className={classes.oneBox}>
            Class
          </Grid>
          <Grid item className={classes.oneBox}>
            <Grid container direction="row">
              <Grid item xs={2}>
                Size
              </Grid>
              <Grid item xs={4}>
                Alignment
              </Grid>
              <Grid item xs={6}>
                Traits
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.oneBox}>
            Deity
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

CharacterInfo.propTypes = {
  info: GeneralInfoType,
};

CharacterInfo.defaultProps = {
  info: {
    exp: 0,
  },
};

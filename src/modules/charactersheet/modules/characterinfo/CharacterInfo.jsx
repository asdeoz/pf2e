import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import CornerGridBox from '../../../../components/CornerGridBox';
import GeneralInfoType from '../../../../lib/GeneralInfoType';

const useStyles = makeStyles({
  root: {
    height: '100%',
    position: 'relative',
  },
  oneBox: {
    position: 'relative',
    minHeight: '2rem',
    border: '1px solid black',
  },
  twoBox: {
    position: 'relative',
    minHeight: '4rem',
    border: '1px solid black',
  },
  threeBox: {
    position: 'relative',
    minHeight: '6rem',
    border: '1px solid black',
  },
  box: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: '.2rem',
    left: '.2rem',
    fontSize: '.8rem',
  },
  info: {
    marginTop: '1.2rem',
    display: 'inline-block',
  },
});

export default function CharacterInfo(props) {
  const classes = useStyles();
  const { info } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <CornerGridBox title="Character Name" info={info.charName} size={2} />
          <CornerGridBox title="Character Name" info={info.charName} />
          <Grid item className={classes.twoBox}>
            <span className={classes.title}>Character Name</span>
            <span className={classes.info}>{info.charName}</span>
          </Grid>
          <Grid item className={classes.twoBox}>
            <span className={classes.title}>Player Name</span>
            <span className={classes.info}>{info.playerName}</span>
          </Grid>
          <Grid item className={classes.twoBox}>
            <span className={classes.title}>Experience Points (XP)</span>
            <span className={classes.info}>{info.exp}</span>
          </Grid>
          <Grid item className={classes.twoBox}>
            <span className={classes.title}>Ancestry and Heritage</span>
            <span className={classes.info}>{info.ancestry}</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item className={classes.twoBox}>
            <span className={classes.title}>Background</span>
            <span className={classes.info}>{info.background}</span>
          </Grid>
          <Grid item className={classes.twoBox}>
            <span className={classes.title}>Class</span>
            <span className={classes.info}>{info.class}</span>
          </Grid>
          <Grid item className={classes.twoBox}>
            <Grid container direction="row">
              <Grid item xs={2} className={classes.box}>
                <span className={classes.title}>Size</span>
                <span className={classes.info}>{info.size}</span>
              </Grid>
              <Grid item xs={4} className={classes.box}>
                <span className={classes.title}>Alignment</span>
                <span className={classes.info}>{info.alignment}</span>
              </Grid>
              <Grid item xs={6} className={classes.box}>
                <span className={classes.title}>Traits</span>
                <span className={classes.info}>{info.traits}</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.twoBox}>
            <span className={classes.title}>Deity</span>
            <span className={classes.info}>{info.deity}</span>
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

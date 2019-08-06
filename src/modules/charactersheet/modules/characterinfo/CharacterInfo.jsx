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
});

export default function CharacterInfo(props) {
  const classes = useStyles();
  const { info } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <CornerGridBox title="Character Name" info={info.charName} size={2} />
          <CornerGridBox title="Player Name" info={info.playerName} size={2} />
          <CornerGridBox title="Experience Points (XP)" info={info.exp} size={2} />
          <CornerGridBox title="Ancestry and Heritage" info={info.ancestry} size={2} />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column">
          <CornerGridBox title="Background" info={info.background} size={2} />
          <CornerGridBox title="Class" info={info.class} size={2} />
          <Grid item>
            <Grid container direction="row">
              <CornerGridBox title="Size" info={info.size} size={2} xs={2} />
              <CornerGridBox title="Alignment" info={info.alignment} size={2} xs={4} />
              <CornerGridBox title="Traits" info={info.traits} size={2} xs={6} />
            </Grid>
          </Grid>
          <CornerGridBox title="Deity" info={info.deity} size={2} />
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

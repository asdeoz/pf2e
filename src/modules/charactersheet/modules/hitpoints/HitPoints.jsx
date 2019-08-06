import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import HeartHitPoints from '../../../../components/HeartHitPoints';
import TitledBox from '../../../../components/TitledBox';

export default function HitPoints(props) {
  const {
    maxHitPoints,
    currentHitPoints,
    tempHitPoints,
    dying,
    wounded,
  } = props;

  return (
    <Grid container>
      <Grid item>
        <HeartHitPoints hitPoints={maxHitPoints} temp={tempHitPoints} size={4} />
      </Grid>
      <Grid item>
        <TitledBox title="Current" info={currentHitPoints} />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <TitledBox title="Temporary" info={tempHitPoints} />
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <TitledBox title="Dying" info={dying} />
            </Grid>
            <Grid item xs={6}>
              <TitledBox title="Wounded" info={wounded} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

HitPoints.propTypes = {
  maxHitPoints: propTypes.number.isRequired,
  currentHitPoints: propTypes.number.isRequired,
  tempHitPoints: propTypes.number,
  dying: propTypes.number,
  wounded: propTypes.number,
};

HitPoints.defaultProps = {
  tempHitPoints: 0,
  dying: 0,
  wounded: 0,
};

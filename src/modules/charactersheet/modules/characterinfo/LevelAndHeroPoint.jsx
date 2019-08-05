import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TitledBox from '../../../../components/TitledBox';

export default function LevelAndHeroPoint(props) {
  const { level, heroPoints } = props;

  return (
    <Grid container direction="column">
      <Grid item>
        <TitledBox title="Level" info={level} />
      </Grid>
      <Grid item>
        <TitledBox title="Hero Points" info={heroPoints} />
      </Grid>
    </Grid>
  );
}

LevelAndHeroPoint.propTypes = {
  level: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  heroPoints: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

LevelAndHeroPoint.defaultProps = {
  heroPoints: '0',
};

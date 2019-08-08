import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AbilityScoresType from '../../../../lib/AbilityScoresType';
import SavingThrowType from '../../../../lib/SavingThrowType';
import CornerGridBox from '../../../../components/CornerGridBox';
import SavingThrow from './SavingThrow';

export default function SavingThrows(props) {
  const { level, abilityscores, savingthrows } = props;
  const {
    fortitude,
    reflex,
    will,
    notes,
  } = savingthrows;

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <SavingThrow
            name="Fortitude"
            scoreName={fortitude.abilityscore}
            scoreValue={abilityscores[fortitude.abilityscore]}
            prof={fortitude.proficiency}
            item={fortitude.item}
            level={level}
          />
          <SavingThrow
            name="Reflex"
            scoreName={reflex.abilityscore}
            scoreValue={abilityscores[reflex.abilityscore]}
            prof={reflex.proficiency}
            item={reflex.item}
            level={level}
          />
          <SavingThrow
            name="Will"
            scoreName={will.abilityscore}
            scoreValue={abilityscores[will.abilityscore]}
            prof={will.proficiency}
            item={will.item}
            level={level}
          />
        </Grid>
      </Grid>
      <Grid item>
        <CornerGridBox title="Notes" info={notes} size={3} />
      </Grid>
    </Grid>
  );
}

SavingThrows.propTypes = {
  level: propTypes.number.isRequired,
  abilityscores: AbilityScoresType.isRequired,
  savingthrows: propTypes.shape({
    fortitude: SavingThrowType.isRequired,
    reflex: SavingThrowType.isRequired,
    will: SavingThrowType.isRequired,
    notes: propTypes.string,
  }).isRequired,
};

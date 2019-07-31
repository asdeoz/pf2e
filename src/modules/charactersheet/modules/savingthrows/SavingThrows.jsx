import React from 'react';
import propTypes from 'prop-types';
import AbilityScoresType from '../../../../lib/AbilityScoresType';
import SavingThrowType from '../../../../lib/SavingThrowType';
import SavingThrow from './SavingThrow';

export default function SavingThrows(props) {
  const { level, abilityscores, savingthrows } = props;
  const { fortitude, reflex, will } = savingthrows;

  return (
    <>
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
    </>
  );
}

SavingThrows.propTypes = {
  level: propTypes.number.isRequired,
  abilityscores: AbilityScoresType.isRequired,
  savingthrows: propTypes.shape({
    fortitude: SavingThrowType.isRequired,
    reflex: SavingThrowType.isRequired,
    will: SavingThrowType.isRequired,
  }).isRequired,
};

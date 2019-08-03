import React from 'react';

import AbilityScores from './modules/abilityscores/AbilityScores';
import SavingThrows from './modules/savingthrows/SavingThrows';
import HeartHitPoints from '../../components/HeartHitPoints';

import sheet from './charactersheetdata.json';

export default function CharacterSheet() {
  return (
    <>
      <AbilityScores scores={sheet.abilityscores} />
      <SavingThrows
        abilityscores={sheet.abilityscores}
        savingthrows={sheet.savingthrows}
        level={sheet.level}
      />
      <HeartHitPoints hitPoints={sheet.maxHitPoints} size={5} />
    </>
  );
}

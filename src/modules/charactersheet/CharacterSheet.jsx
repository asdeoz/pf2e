import React from 'react';

import AbilityScores from './modules/abilityscores/AbilityScores';
import SavingThrows from './modules/savingthrows/SavingThrows';

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
    </>
  );
}

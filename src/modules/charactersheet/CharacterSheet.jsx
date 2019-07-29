import React from 'react';

import AbilityScores from './modules/abilityscores/AbilityScores';
import SavingThrow from './modules/savingthrows/SavingThrow';

import sheet from './charactersheetdata.json';

export default function CharacterSheet() {
  return (
    <>
      <AbilityScores scores={sheet.abilityscores} />
      <SavingThrow level={2} prof={3} modName="Charisma" modValue={sheet.abilityscores.charisma} />
    </>
  );
}

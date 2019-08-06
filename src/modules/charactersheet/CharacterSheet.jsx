import React from 'react';

import AbilityScores from './modules/abilityscores/AbilityScores';
import SavingThrows from './modules/savingthrows/SavingThrows';
import CharacterInfo from './modules/characterinfo/CharacterInfo';
import LevelAndHeroPoint from './modules/characterinfo/LevelAndHeroPoint';
import HitPoints from './modules/hitpoints/HitPoints';

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
      <HitPoints
        maxHitPoints={sheet.maxHitPoints}
        currentHitPoints={sheet.currentHitPoints}
        tempHitPoints={sheet.tempHitPoints}
        dying={sheet.dying}
        wounded={sheet.wounded}
      />
      <CharacterInfo info={sheet.generalInfo} />
      <LevelAndHeroPoint level={sheet.level} heroPoints={sheet.heroPoints} />
    </>
  );
}

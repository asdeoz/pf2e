export function calculateProficiency(prof, level) {
  return (!prof || prof === 0 ? 0 : (prof * 2) + level);
}

export function calculateModifier(score) {
  return (Math.floor(score / 2) - 5);
}

export function printModifier(modifier) {
  return modifier > 0 ? `+${modifier}` : modifier;
}

const Utils = {
  calculateProficiency,
  calculateModifier,
  printModifier,
};

export default Utils;

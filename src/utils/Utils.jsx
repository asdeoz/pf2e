export function calculateProficiency(prof, level) {
  return (!prof || prof === 0 ? 0 : (prof * 2) + level);
}

export function calculateModifier(score) {
  return (Math.floor(score / 2) - 5);
}

export function printBonus(bonus) {
  if (!bonus) return '0';
  return bonus > 0 ? `+${bonus}` : bonus.toString();
}

export function abbr(text, count) {
  const charcount = count || 3;
  return text.substring(0, charcount);
}

const Utils = {
  calculateProficiency,
  calculateModifier,
  printBonus,
  abbr,
};

export default Utils;

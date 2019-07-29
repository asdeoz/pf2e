export function calculateProficiency(prof, level) {
  return (!prof || prof === 0 ? 0 : (prof * 2) + level);
};

const Utils = {
  calculateProficiency,
};

export default Utils;

import propTypes from 'prop-types';

const AbilityScoresType = propTypes.shape({
  strength: propTypes.number.isRequired,
  dexterity: propTypes.number.isRequired,
  constitution: propTypes.number.isRequired,
  intelligence: propTypes.number.isRequired,
  wisdom: propTypes.number.isRequired,
  charisma: propTypes.number.isRequired,
});

export default AbilityScoresType;

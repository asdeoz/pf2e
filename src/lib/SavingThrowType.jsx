import propTypes from 'prop-types';

const SavingThrowType = propTypes.shape({
  proficiency: propTypes.number.isRequired,
  item: propTypes.number,
  abilityscore: propTypes.string.isRequired,
});

export default SavingThrowType;

import propTypes from 'prop-types';

const GeneralInfoType = propTypes.shape({
  charName: propTypes.string,
  playerName: propTypes.string,
  exp: propTypes.number,
  ancestry: propTypes.string,
  background: propTypes.string,
  class: propTypes.string,
  size: propTypes.string,
  alignment: propTypes.string,
  traits: propTypes.string,
  deity: propTypes.string,
});

export default GeneralInfoType;

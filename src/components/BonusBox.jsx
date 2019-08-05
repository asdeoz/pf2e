import React from 'react';
import propTypes from 'prop-types';

import TitledBox from './TitledBox';
import { printBonus } from '../utils/Utils';

export default function BonusBox(props) {
  const { title, bonus, uppercase } = props;

  return (
    <TitledBox title={title} info={printBonus(bonus)} uppercase={uppercase} />
  );
}

BonusBox.propTypes = {
  title: propTypes.string.isRequired,
  bonus: propTypes.number,
  uppercase: propTypes.bool,
};

BonusBox.defaultProps = {
  bonus: 0,
  uppercase: false,
};

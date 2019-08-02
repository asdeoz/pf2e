import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { printBonus } from '../utils/Utils';

const useStyles = makeStyles({
  root: {
    border: '1px solid black',
    margin: '.3rem',
    maxWidth: '5.8rem',
  },
  title: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 'smaller',
    textTransform: 'uppercase',
  },
});

export default function BonusBox(props) {
  const { title, bonus } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Typography>
        {printBonus(bonus)}
      </Typography>
    </div>
  );
}

BonusBox.propTypes = {
  title: propTypes.string.isRequired,
  bonus: propTypes.number,
};

BonusBox.defaultProps = {
  bonus: 0,
};

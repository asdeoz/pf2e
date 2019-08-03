import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  icon: {
    fontSize: size => `${size * 1.5}rem`,
    top: 0,
    left: 0,
  },
  text: {
    position: 'absolute',
    fontSize: size => `${size * 0.4}rem`,
    top: 0,
    left: 0,
    width: size => `${size * 1.5}rem`,
    lineHeight: size => `${size * 1.4}rem`,
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});

export default function HeartHitPoints(props) {
  const { hitPoints, size } = props;
  const classes = useStyles(size);

  return (
    <div className={classes.root}>
      <SvgIcon className={classes.icon} viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
        <path xmlns="http://www.w3.org/2000/svg" d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
      </SvgIcon>
      <span className={classes.text}>
        {hitPoints}
      </span>
    </div>
  );
}

HeartHitPoints.propTypes = {
  hitPoints: propTypes.number.isRequired,
  size: propTypes.number,
};

HeartHitPoints.defaultProps = {
  size: 1,
};
